// hardhat.config.js
require('@nomiclabs/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()
const { MNEMONIC, INFURA_KEY, ETHERSCAN_API_KEY} = process.env

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'rinkeby',
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`, //for rinkeby
      chainId: 4, //for rinkeby
      // gasPrice: 20000000000,
      accounts: { mnemonic: MNEMONIC },
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY, //for etherscan 
  },
  solidity: '0.7.3',
  mocha: {
    timeout: 100000000
  },
}
