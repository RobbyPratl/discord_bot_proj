const hre = require("hardhat")
const ethers = hre.ethers;
const config = require("hardhat/config")

const main = async () => {
  await config.networks();
    await hre.run("compile");
    const nftContractFactory = await hre.ethers.getContractFactory('DISCORD_NFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to", nftContract.address);

  };
  
  const deploy_contract_initial = async() => {
    try {
      await main();
      process.exit(0);
    }catch(error) {
      console.log(error);
      process.exit(1);
    }
  };
deploy_contract_initial
  module.exports = {
    main,
    deploy_contract_initial
  }

