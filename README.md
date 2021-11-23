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