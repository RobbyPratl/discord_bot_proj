const config = require("./env_generator");
// pass in your api key, then your private key
// open a terminal in this directory and type 
// "node setup.js"



const API_KEY = "https://eth-rinkeby.alchemyapi.io/v2/kN8L0dmJ48DsVLX9Yiyz_CVq0cTcdbIa";
const PRIVATE_KEY = "b5c409b10a334a13f416854bdb55cec6a58a59a2c85b5ef9e506345b84da430f";

function setup(API_KEY, PRIVATE_KEY){
  config.generateEnvString(API_KEY,PRIVATE_KEY)
}

setup(API_KEY,PRIVATE_KEY)