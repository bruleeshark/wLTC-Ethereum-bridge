const { deployment } = require("hardhat/config");

async function main() {
  // Set the deployment account in the hardhat.config.js file
  deployment.accounts = [
    {
      privateKey: "0x...",
      balance: "100000000000000000000",
    },
    // Add more accounts here if needed
  ];

  const LitecoinToken = await ethers.getContractFactory("LitecoinToken");

  // Specify the contract owner when deploying the contract
  const contract = await LitecoinToken.deploy(owner);
  await contract.deployed();
  console.log("LitecoinToken deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
