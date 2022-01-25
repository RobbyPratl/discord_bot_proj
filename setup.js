const config = require("./config_generator");

// pass in your api key, then your private key
// open a terminal in this directory and type 
// "node setup.js"

const API_KEY = "your alchemy api key";
const PRIVATE_KEY = "your ethereum wallet private key";

config.generateEnvString(API_KEY,PRIVATE_KEY);
console.log("deleting self");
const path = "./setup.js";
try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.error(err)
}
