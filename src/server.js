const express = require("express");
const app = express();
const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Define constants for the ABI and address of the LitecoinToken contract
const LITECOIN_TOKEN_ABI = [
  // ABI definition goes here
];
const LITECOIN_TOKEN_ADDRESS = "0x...";

const LitecoinToken = new web3.eth.Contract(LITECOIN_TOKEN_ABI, LITECOIN_TOKEN_ADDRESS);

app.get("/balance/:address", async (req, res) => {
  try {
    const balance = await LitecoinToken.methods.balanceOf(req.params.address).call();
    res.send({ balance });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.post("/deposit", async (req, res) => {
  try {
    const { address, amount } = req.body;
    const wLTCAmount = fromWei(amount.toString(), "ether");
    await LitecoinToken.methods.mint(address, wLTCAmount).send({ from: OWNER_ADDRESS });
    res.send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
});
