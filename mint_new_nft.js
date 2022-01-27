const hre = require("hardhat")
// const hre = require("@nomiclabs/hardhat-ethers");

const main = async (c) => {
// pass in a json file, it will deploy with onchain base64 encoded json

    var base64data = c
    var contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    contractAddress.toString();

    const nftContract = await hre.ethers.getContractAt("DISCORD_NFT", contractAddress);
    
    console.log("Contract deployed at", nftContract.address);
    

    let txn = await nftContract.makeAnEpicNft(base64data)
    await txn.wait()
    console.log("minted anotha mothafucka")
}

  const runMain = async(base64Deployment) => {
    try {
      await main(base64Deployment);
      process.exit(0);
    }catch(error) {
      console.log(error);
      process.exit(1);
    }
  };

  module.exports = {
    main,
    runMain
  }