import web3 from './web3.js';
import { CONTRACT_DATA } from './constants';

export default new web3.eth.Contract(CONTRACT_DATA.abi, CONTRACT_DATA.address);     // Exports local instance of Contract previously deployed to Rinkeby ethereum blockchain