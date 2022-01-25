/*
will be used in initial setup of discord bot to generate 
a .env file. KEEP THIS A SECRET DONT SHARE WITH OTHERS
*/
fs = require('fs');
function generateEnvString(API_KEY, PRIV_KEY){
  var api_key_prefix = "API_KEY=";
  var priv_key_prefix = "PRIV_KEY=";
  var process = api_key_prefix + API_KEY+ "\n"+priv_key_prefix + PRIV_KEY;

  fs.writeFile('./process.env',process, function (err) {
  if (err) return console.log(err);
});
}

generateEnvString("APIKEYTEST","PRIV_KEY")