module.exports = async ({getNamedAccounts, deployments}) => {
    const { deployer } = await getNamedAccounts();

    const mock = await deployments.deploy('MockUniRouter', {
        contract: 'MockUniRouter',
        from: deployer,
        log: true
    });

    await deployments.execute(
        'CampaignFactory',
        {from: deployer, log:true},
        'setRouter',
        0,
        mock.address.toString()
    );

    await deployments.execute(
        'CampaignFactory',
        {from: deployer, log:true},
        'setRouter',
        1,
        mock.address.toString()
    )
};

module.exports.tags = ['mock_uni'];
