/*
 * CityDAO Constitution smart contract
 */

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Constitution is Ownable {
    string public constant VER = "1.0";
    string public constitution_ipfs_hash = "0";

    /* These functions are provided by Ownable
     *
     * isOwner() -> checks if the current wallet is the owner
     * owner() → returns the address of the owner
     * transferOwnership(address newOwner) -> transfers the ownership to a new wallet
     *
     */

    /*
     * Update the constitution to an IPFS hash
     */
    function updateConstitution(string memory _ipfs_hash) public onlyOwner {
        constitution_ipfs_hash = _ipfs_hash;
    }

    function returnConstitution() public view returns (string memory) {
        return constitution_ipfs_hash;
    }
}
