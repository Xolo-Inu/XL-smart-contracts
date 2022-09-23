require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require('hardhat-deploy');


module.exports = {
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  networks: {
    hardhat: {
      chainId: 1111,
      accounts: {
        count: 50
      }
    },
    mainnet: {
      url: "https://bsc-dataseed1.defibit.io/",
      chainId: 56,
      gasPrice: 6000000000,
      // accounts: ['KEY'],
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
