require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan");


module.exports = {
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  networks: {
    mainnet: {
      url: "https://bsc-dataseed1.defibit.io/",
      chainId: 56,
      gasPrice: 6000000000,
      accounts: ['KEY'],
      timeout: 1000000
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "ETHERSCAN_API_KEY"
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000
      }
    }
  },
};
