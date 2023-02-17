import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
require("dotenv").config();

const { INFURA_ID, PRIVATE_KEY = "", ETHERSCAN_KEY = "" } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
      {
        version: "0.6.0",
      },
    ],
  },
  defaultNetwork: "localhost",
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_ID}`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};

export default config;
