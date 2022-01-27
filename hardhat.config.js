require('dotenv').config({ path: './process.env' })
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.API_KEY,
      accounts: [process.env.PRIV_KEY]
    }
  }
};