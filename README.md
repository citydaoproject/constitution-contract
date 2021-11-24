## Looking to contribute?

Check this page [here](https://citydao.notion.site/Constitution-Contract-ad371dcb39644ae6b8b2b4451e92d296) 


## Development

1. Install the following libraries

> npm install --save-dev @openzeppelin/contracts
> npm install truffle
> npm install dotenv
> npm install @truffle/hdwallet-provider


2. create a .env file in the root folder with these values

API_URL_dev = "YOURALCHEMYAPIURL"
MNEMONIC_dev = "YOURWALLETMNEMONICS"

** DO NOT COMMIT THAT FILE**

3. Compile

> npx truffle compile

4. Deploy

> truffle deploy --network rinkeby --reset

5. Interact with the smart contract

> truffle console --network rinkeby

ipfs hash -> QmNQNLZW5d3EgJnNsHDjVLB9Yjai8sTaXSUn3LS1uV2baJ


## Architecture

1. Smart contract with the following functions
    1. **isOwner → returns address**
    2. **changeOwner(new address) : onlyOwner → returns true on success** (so we can change the owner to a gnosis safe address - only they should be able to change the IPFS link)
    3. **updateConstitution(ipfs_hash) : onlyOwner → returns true on success** (only the owner can make changes)
    4. (if we want to store who accepted the constitution) **acceptConstitution(self.address) : isNFTOwner → returns true on success**

# Libraries

1. OpenZeppelin (Ownable to handle ownership) - maybe because it is an easy case, we don't really need it

# Global Variables

> address constitutionIPFS; //holds the ipfs hash

# Services

[Pinata](https://www.pinata.cloud/) (free tier) to pin the IPFS link