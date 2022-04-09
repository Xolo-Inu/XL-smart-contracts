module.exports = async ({getNamedAccounts, deployments}) => {
    const {deployer} = await getNamedAccounts();

    const owner = '0xaEd38D876a152112c13104c39dd5b040b67F2AfB';
    const totalSupply = '3500000000000000000000000000';

    await deployments.deploy('XoloRocket', {
        from: deployer,
        log: true,
        args: [owner, totalSupply]
    });
};
module.exports.tags = ['token'];
