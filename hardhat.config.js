const { readFileSync } = require("fs");
const { join } = require("path");

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/YOUR-INFURA-API-KEY",
      accounts: [
        {
          privateKey: readFileSync(join(__dirname, "../.secret/rinkeby_account_1"), "utf-8").trim()
        }
      ]
    }
  },
  paths: {
    sources: "contracts"
  },
  files: {
    contracts: [
      "LitecoinToken.sol"
    ]
  }
};
