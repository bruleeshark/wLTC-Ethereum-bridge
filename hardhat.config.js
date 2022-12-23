const { readFileSync } = require("fs");
const { join } = require("path");

// Load values from .env file
require("dotenv").config();

// Define constants for file paths and contract names
const PATH_SOURCES = "contracts";
const PATH_SECRETS = join(__dirname, "../.secret");
const FILE_CONTRACTS = "LitecoinToken.sol";

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
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [
        {
          privateKey: readFileSync(join(PATH_SECRETS, "rinkeby_account_1"), "utf-8").trim()
        }
      ]
    }
  },
  paths: {
    sources: PATH_SOURCES
  },
  files: {
    contracts: [FILE_CONTRACTS]
  }
};
