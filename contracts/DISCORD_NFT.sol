pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract DISCORD_NFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721 ("DISCORD_NFT", "DISCORD_NFT") {
        console.log("This is my NFT PROJECT");
    }

    function makeAnEpicNft(string memory _metadata) public {
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender,newItemId);
        _setTokenURI(newItemId, _metadata);
        console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
        _tokenIds.increment();
    }
    function makeNothin() public{
      console.log("Nothing happened");
    }
}