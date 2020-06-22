# ethereum-lottery
A basic Reactjs front end for interacting with an Ethereum lottery Solidity smart contract compiled in Solidity and deployed using web3 and node.js

In order to successfully run application in chrome, user must have MetaMask chrome extension with accompanying ethereum account

lottery-backend contains the node.js application to compile and deploy smart contract
    - Running node deploy.js deploys contract and provides its address and ABI 

lottery-react contains react front end to interact with application:
    - Constants file contains address location of ethereum contract deployment, as well as the smart contract Application Binary Interface (ABI)

