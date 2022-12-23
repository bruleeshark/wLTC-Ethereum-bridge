pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract LitecoinToken is SafeERC20 {
  // Define the owner address at the top of the contract
  address public owner;

  string public name = "wLTC";
  string public symbol = "wLTC";
  uint8 public decimals = 18;
  uint256 public totalSupply;

  constructor() public {
    // Set the owner to the contract creator
    owner = msg.sender;
    totalSupply = 1000000 * (10 ** uint256(decimals));
  }

  // Define the mint function outside of the contract block
  function mint(address _to, uint256 _amount) public {
    // Validate input parameters
    require(msg.sender == owner, "Only the owner can mint tokens");
    require(_amount > 0, "Cannot mint 0 or negative tokens");
    require(_to != address(0), "Cannot mint tokens to the zero address");

    totalSupply += _amount;
    balanceOf[_to] += _amount;

    // Emit an event when the function is called
    emit Transfer(address(0), _to, _amount);
  }
}
