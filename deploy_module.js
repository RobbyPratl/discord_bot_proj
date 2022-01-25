const execSync = require('child_process').execSync;

function deploy(filepath,network){
  const output = execSync('npx hardhat run '+filepath+" --network "+network, { encoding: 'utf-8' });  // the default is 'buffer'
  console.log('Output was:\n', output);
}

module.exports = {
  deploy
}
