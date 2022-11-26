import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import 'hardhat-deploy';
import '@typechain/hardhat';
import {HardhatUserConfig} from "hardhat/config";


const config: HardhatUserConfig = {
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
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 5000000000,
      timeout: 1000000
    },
    testnet: {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545/",
      chainId: 97,
      timeout: 100000,
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000
      }
    }
  }
};

export default config;