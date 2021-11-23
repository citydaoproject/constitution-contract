require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

const { API_URL_dev, MNEMONIC_dev, API_URL_prod, MNEMONIC_prod } = process.env;
module.exports = {

  networks: {
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC_dev, API_URL_dev)
      },
      network_id: "*",
      gas: 4000000 //4M is the max
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC_prod, API_URL_prod, 0) // the number in the end is the wallet
      },
      //gasPrice: web3.utils.toWei('12', 'gwei'), // check https://ethgasstation.info/
      network_id: 1,
      //gas: 2000000
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
