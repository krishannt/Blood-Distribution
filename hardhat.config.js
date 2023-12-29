require("@nomicfoundation/hardhat-toolbox");

const envFile = "./.env";
require("dotenv").config({ path: envFile });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
  networks: {
    goerli: {
      url: process.env.QUICK_NODE_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
