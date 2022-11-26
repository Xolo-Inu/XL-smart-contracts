import {Campaign, CampaignFactory, MockERC20, MockUniRouter} from "../typechain-types";
import {Contract, Signer} from "ethers";
import {deployments} from "hardhat";
import {min} from "hardhat/internal/util/bigint";

const chai = require("chai");
const { ethers } = require("hardhat");
const { solidity } = require("ethereum-waffle");
chai.use(solidity);
const { expect } = chai;


describe('Xolo launchpad tests', async function() {
    let implementation: Contract;
    let factory: CampaignFactory;
    let token: MockERC20;
    let mock_uni: MockUniRouter;
    let admin: Signer;
    let alice: Signer, bob: Signer, carol: Signer, anne: Signer;
    const bnb = 10**9;

    it('Setup', async function() {
        await deployments.fixture(['campaign', 'factory', 'mock_uni']);
        [admin, alice, bob, carol, anne] = await ethers.getSigners();

        implementation = await ethers.getContract('Campaign');
        factory = await ethers.getContract('CampaignFactory');
        mock_uni = await ethers.getContract('MockUniRouter');

        // pancake
        await factory.connect(admin).setRouter(0, mock_uni.address);
        // sushi
        await factory.connect(admin).setRouter(1, mock_uni.address);

        // for fork testing
        // pancake
        // await factory.connect(admin).setRouter(0, '0x10ED43C718714eb63d5aA57B78B54704E256024E');
        // // sushi
        // await factory.connect(admin).setRouter(1, '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506');
    });

    it('Create token', async function() {
        const Token = await ethers.getContractFactory("MockERC20");
        token = await Token.deploy('TEST', 'TEST', 1000000000000);
        await token.deployed();
    });

    describe('Campaign 1 - pancake, burn unsold', async function() {
        let presale_tokens: number, liq_tokens: number, min_purchase: number, max_purchase: number,
            softcap: number, rate:number, liq_percent: number, lockup: number, hardcap: number;

        let campaign: Campaign;

        it('Create campaign', async function() {
            const block = await ethers.provider.getBlock();
            presale_tokens = 800000;
            liq_tokens = 2000000;
            min_purchase = 1000;
            softcap = 200 * bnb;
            rate = 2000;
            max_purchase = rate * 200;
            liq_percent = 8000;
            lockup = 100 * 24 * 3600;
            hardcap = presale_tokens / rate; // 400 bnb

            await factory.connect(alice).createCampaign(
                1,
                {
                    token: token.address,
                    start: block.timestamp + 24 * 3600, // 1 day after
                    end: block.timestamp + 24 * 3600 * 2, // 2 days after
                    presaleTokens: presale_tokens,
                    liquidityTokens: liq_tokens,
                    minPurchaseTokens: min_purchase,
                    maxPurchaseTokens: max_purchase,
                    softCap: softcap,
                    tokensPerBnb: rate,
                    dex: 0,
                    action: 0,
                    liquidityPercent: liq_percent,
                    liquidityLockupPeriod: lockup
                }
            );

            const res = await factory.getCampaignList([1]);
            campaign = await ethers.getContractAt('Campaign', res._campaigns[0]);
        });

        // snapshot and revert
        it('Reset until started', async function() {
            const snapshot = await ethers.provider.send("evm_snapshot");
            await campaign.connect(admin).reset();

            const reseted = await campaign.reseted();
            expect(reseted).to.be.true;

            await ethers.provider.send("evm_increaseTime", [24 * 3600 + 1]);
            await expect(campaign.connect(bob).buyTokens({value: bnb})).to.be.revertedWith(
                "Campaign::presaleLive: presale not live"
            );
            await ethers.provider.send("evm_revert", [snapshot]);
        });

        it('Try protected functions before start/after end', async function() {
            await expect(campaign.connect(bob).buyTokens({value: bnb})).to.be.revertedWith(
                "Campaign::presaleLive: presale not live"
            );

            await expect(campaign.connect(alice).finishPresale()).to.be.revertedWith(
                "Campaign::presaleEnded: presale not ended"
            );
            await expect(campaign.connect(bob).getReservedTokens()).to.be.revertedWith(
                "Campaign::presaleEnded: presale not ended"
            );
            await expect(campaign.connect(bob).refund()).to.be.revertedWith(
                "Campaign::presaleEnded: presale not ended"
            );

            const snapshot = await ethers.provider.send("evm_snapshot");
            await ethers.provider.send("evm_increaseTime", [24 * 3600 * 2 + 1]);

            await expect(campaign.connect(bob).buyTokens({value: bnb})).to.be.revertedWith(
                "Campaign::presaleLive: presale not live"
            );

            await ethers.provider.send("evm_revert", [snapshot]);
        });

        it('Buy too few/too much tokens', async function() {
            // send tokens to campaign
            await token.connect(admin).transfer(campaign.address, liq_tokens + presale_tokens);

            await ethers.provider.send("evm_increaseTime", [24 * 3600 + 1]);

            const min_value = (min_purchase / rate) * bnb - 1;
            await expect(campaign.connect(bob).buyTokens({value: min_value})).to.be.revertedWith(
                "Campaign::buyTokens: too low/high purchase amount"
            );

            const max_value = (max_purchase / rate) * bnb + bnb;
            await expect(campaign.connect(bob).buyTokens({value: max_value})).to.be.revertedWith(
                "Campaign::buyTokens: too low/high purchase amount"
            );
        });

        it('Correct purchase', async function() {
            {
                await campaign.connect(bob).buyTokens({value: bnb});
                const expected_buy = await campaign.calculateTokens(bnb);

                const reserved_tokens = await campaign.reserved_tokens(bob.getAddress());
                expect(reserved_tokens.toString()).to.be.eq(rate.toString());
                expect(expected_buy._tokens_to_buy.toString()).to.be.eq(rate.toString());
                expect(expected_buy._buy_val.toString()).to.be.eq(bnb.toString());

                const reserved_bnb = await campaign.reserved_bnbs(bob.getAddress());
                expect(reserved_bnb.toString()).to.be.eq(bnb.toString());

                const raised = await campaign.raised();
                expect(raised).to.be.eq(bnb.toString());
            }

            {
                await campaign.connect(bob).buyTokens({value: bnb / 2});
                const expected_buy = await campaign.calculateTokens(bnb * 1.5);

                const reserved_tokens = await campaign.reserved_tokens(bob.getAddress());
                expect(reserved_tokens.toString()).to.be.eq((rate * 1.5).toString());
                expect(expected_buy._tokens_to_buy.toString()).to.be.eq((rate * 1.5).toString());
                expect(expected_buy._buy_val.toString()).to.be.eq((bnb * 1.5).toString());

                const reserved_bnb = await campaign.reserved_bnbs(bob.getAddress());
                expect(reserved_bnb.toString()).to.be.eq((bnb * 1.5).toString());

                const raised = await campaign.raised();
                expect(raised).to.be.eq((bnb * 1.5).toString());
            }
        });

        // snapshot - revert
        it('Softcap not reached', async function() {
            const snapshot = await ethers.provider.send("evm_snapshot");

            await ethers.provider.send("evm_increaseTime", [24 * 3600]);

            await expect(campaign.connect(alice).finishPresale()).to.be.revertedWith(
              "Campaign::finishPresale: softCap not reached"
            );

            await expect(campaign.connect(bob).getReservedTokens()).to.be.revertedWith(
                "Campaign::getReservedTokens: softCap not reached"
            );

            const reserved_bnb_before = await campaign.reserved_bnbs(bob.getAddress());
            const reserved_tokens_before = await campaign.reserved_tokens(bob.getAddress());

            await expect(campaign.connect(bob).refund())
                .to.emit(campaign,"Refund")
                .withArgs((await bob.getAddress()), reserved_bnb_before.toString(), reserved_tokens_before.toString())

            const reserved_tokens = await campaign.reserved_tokens(bob.getAddress());
            const reserved_bnb = await campaign.reserved_bnbs(bob.getAddress());

            expect(reserved_bnb.toString()).to.be.eq('0');
            expect(reserved_tokens.toString()).to.be.eq('0');

            await ethers.provider.send("evm_revert", [snapshot]);
        });

        // snapshot - revert
        it('Softcap reached', async function() {
            const snapshot = await ethers.provider.send("evm_snapshot");

            await campaign.connect(carol).buyTokens({value: softcap});
            await ethers.provider.send("evm_increaseTime", [24 * 3600]);

            await expect(campaign.connect(bob).refund()).to.be.revertedWith(
                "Campaign::refund: softCap reached"
            );

            const reserved_tokens_before = await campaign.reserved_tokens(bob.getAddress());

            await campaign.connect(bob).getReservedTokens();

            const reserved_tokens = await campaign.reserved_tokens(bob.getAddress());
            expect(reserved_tokens.toString()).to.be.eq('0');

            const bob_tokens = await token.balanceOf(bob.getAddress());
            expect(bob_tokens.toString()).to.be.eq(reserved_tokens_before.toString());

            const raised = await campaign.raised();
            await campaign.connect(alice).finishPresale();

            const factory_bal = await ethers.provider.getBalance(factory.address);
            expect(factory_bal.toString()).to.be.eq((raised.mul(500).div(10000)).toString());

            const block = await ethers.provider.getBlock();
            const lock_until = await campaign.lp_lock_until();
            expect(lock_until.toString()).to.be.eq((block.timestamp + lockup).toString());

            const burned = await token.balanceOf('0x000000000000000000000000000000000000dEaD');
            expect(burned.toString()).to.be.eq((presale_tokens - raised.mul(rate).div(bnb).toNumber()).toString());

            await ethers.provider.send("evm_revert", [snapshot]);
        });

        // snapshot - revert
        it('Hardcap reached', async function() {
            await campaign.connect(carol).buyTokens({value: softcap});

            const raised = await campaign.raised();

            const hardcap = await campaign.hardCap();
            const remaining_val = hardcap.sub(raised);
            const remaining_tokens = remaining_val.mul(rate).div(bnb);

            const expected_buy = await campaign.calculateTokens(softcap);
            await campaign.connect(anne).buyTokens({value: softcap});

            const reserved_bnb = await campaign.reserved_bnbs(anne.getAddress());
            const reserved_tokens = await campaign.reserved_tokens(anne.getAddress());

            expect(expected_buy._buy_val.toString()).to.be.eq(reserved_bnb.toString());
            expect(expected_buy._tokens_to_buy.toString()).to.be.eq(reserved_tokens.toString());
            expect(remaining_val.toString()).to.be.eq(reserved_bnb.toString());
            expect(remaining_tokens.toString()).to.be.eq(reserved_tokens.toString());

            await ethers.provider.send("evm_increaseTime", [24 * 3600]);
            await campaign.connect(alice).finishPresale();
        });

        it('Liquidity unlocked', async function() {
            await expect(campaign.connect(alice).unlockLiquidity()).to.be.revertedWith(
                "Campaign::unlockLiquidity: too early to unlock liq"
            );

            await ethers.provider.send("evm_increaseTime", [lockup]);

            await campaign.connect(alice).unlockLiquidity();

        });
    });

    describe('Campaign 2, sushi, reserve unsold', async function() {
        let presale_tokens: number, liq_tokens: number, min_purchase: number, max_purchase: number,
            softcap: number, rate:number, liq_percent: number, lockup: number, hardcap: number;

        let campaign: Campaign;

        it('Create campaign', async function() {
            const block = await ethers.provider.getBlock();
            presale_tokens = 800000;
            liq_tokens = 2000000;
            min_purchase = 1000;
            softcap = 200 * bnb;
            rate = 2000;
            max_purchase = rate * 200;
            liq_percent = 8000;
            lockup = 100 * 24 * 3600;
            hardcap = presale_tokens / rate; // 500 bnb

            await factory.connect(alice).createCampaign(
                2,
                {
                    token: token.address,
                    start: block.timestamp + 24 * 3600, // 1 day after
                    end: block.timestamp + 24 * 3600 * 2, // 2 days after
                    presaleTokens: presale_tokens,
                    liquidityTokens: liq_tokens,
                    minPurchaseTokens: min_purchase,
                    maxPurchaseTokens: max_purchase,
                    softCap: softcap,
                    tokensPerBnb: rate,
                    dex: 1,
                    action: 1,
                    liquidityPercent: liq_percent,
                    liquidityLockupPeriod: lockup
                }
            );

            const res = await factory.getCampaignList([2]);
            campaign = await ethers.getContractAt('Campaign', res._campaigns[0]);
        });

        it('Check unsold tokens sent to owner', async function() {
            await ethers.provider.send("evm_increaseTime", [24 * 3600]);

            await token.connect(admin).transfer(campaign.address, liq_tokens + presale_tokens);
            await campaign.connect(carol).buyTokens({value: softcap});

            await ethers.provider.send("evm_increaseTime", [24 * 3600]);

            const hardcap = await campaign.hardCap();
            const raised = await campaign.raised();
            const remaining_val = hardcap.sub(raised);
            const remaining_tokens = remaining_val.mul(rate).div(bnb);

            const bal_before = await token.balanceOf(alice.getAddress());
            await campaign.connect(alice).finishPresale();
            const bal_after = await token.balanceOf(alice.getAddress());

            const reserve = bal_after.sub(bal_before);
            expect(reserve.toString()).to.be.eq(remaining_tokens.toString());
        });
    });
});
