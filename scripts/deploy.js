const { deployment } = require("hardhat/config");

async function main() {
  const LitecoinToken = await ethers.getContractFactory("LitecoinToken");
  const contract = await LitecoinToken.deploy();
  await contract.deployed();
  console.log("LitecoinToken deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const contract = await LitecoinToken.deploy(owner);
