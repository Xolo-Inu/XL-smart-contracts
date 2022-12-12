module.exports = async ({getNamedAccounts, deployments, getChainId}) => {
    const { deployer } = await getNamedAccounts();

    const campaign = await deployments.get('Campaign');

    await deployments.deploy('CampaignFactory', {
        contract: 'CampaignFactory',
        from: deployer,
        log: true,
        proxy: {
            proxyContract: 'OpenZeppelinTransparentProxy',
            execute: {
                methodName: 'initialize',
                args: [
                    deployer,
                    campaign.address,
                    500
                ],
            }
        }
    });

    const chain_id = await getChainId();
    if (chain_id === '56') {
        await deployments.execute(
            'CampaignFactory',
            {from: deployer, log:true},
            'setRouter',
            0,
            // pancake bsc
            '0x10ED43C718714eb63d5aA57B78B54704E256024E'
        );
        await deployments.execute(
            'CampaignFactory',
            {from: deployer, log:true},
            'setRouter',
            1,
            // sushi bsc
            '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
        );
    }

    if (chain_id === '1') {
        await deployments.execute(
            'CampaignFactory',
            {from: deployer, log:true},
            'setRouter',
            0,
            // pancake eth
            '0xEfF92A263d31888d860bD50809A8D171709b7b1c'
        );
        await deployments.execute(
            'CampaignFactory',
            {from: deployer, log:true},
            'setRouter',
            1,
            // sushi eth
            '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'
        );
    }

};

module.exports.tags = ['factory'];
