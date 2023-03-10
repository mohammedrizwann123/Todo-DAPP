require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const Quicknode_API_KEY_URL = process.env.Quicknode_API_KEY_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: Quicknode_API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
