pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract LitecoinToken is SafeERC20 {
  string public name = "wLTC";
  string public symbol = "wLTC";
  uint8 public decimals = 18;
  uint256 public totalSupply;

  constructor() public {
    totalSupply = 1000000 * (10 ** uint256(decimals));
  }
}

function mint(address _to, uint256 _amount) public {
  require(msg.sender == owner, "Only the owner can mint tokens");
  require(_amount > 0, "Cannot mint 0 or negative tokens");
  totalSupply += _amount;
  balanceOf[_to] += _amount;
  emit Transfer(address(0), _to, _amount);
}
