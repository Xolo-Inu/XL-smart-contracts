module.exports = async ({getNamedAccounts, deployments}) => {
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
};

module.exports.tags = ['factory'];
