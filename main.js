//const config = require("./env_generator");
const json_generation = require("./json_generator");
const hardhat_mint = require("./mint_new_nft.js");
const deploy_contract = require("./deploy.js")

// setup is required to execute these functions
function deploy_initial(){
  deploy_contract.deploy_contract_initial();
}
// if no image type is given, it is assumed that the image is a link
function mint(name,desc,image,imagetype = null){
  jsonData = json_generation.generateEncoded(name,desc,image,imagetype);

  hardhat_mint.runMain(jsonData)

  //deploy_module.deploy_command("deployment.js","rinkeby")
}

deploy_initial();