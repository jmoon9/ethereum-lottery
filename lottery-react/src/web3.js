import Web3 from 'web3';

window.ethereum.enable();

const web3 = new Web3(window.web3.currentProvider);     // takes current instance of web3 provider from browser

export default web3;