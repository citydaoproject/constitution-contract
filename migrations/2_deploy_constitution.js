const Constitution = artifacts.require("./constitution.sol");

module.exports = async (deployer, network, addresses) => {
    await deployer.deploy(Constitution);
}