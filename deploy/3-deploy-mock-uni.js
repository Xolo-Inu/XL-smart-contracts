module.exports = async ({getNamedAccounts, deployments}) => {
    const { deployer } = await getNamedAccounts();

    await deployments.deploy('MockUniRouter', {
        contract: 'MockUniRouter',
        from: deployer,
        log: true
    });
};

module.exports.tags = ['mock_uni'];
