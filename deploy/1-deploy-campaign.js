module.exports = async ({getNamedAccounts, deployments}) => {
    const { deployer } = await getNamedAccounts();

    await deployments.deploy('Campaign', {
        from: deployer,
        log: true,
        args: []
    });
};

module.exports.tags = ['campaign'];
