import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const [account, setAccount] = useState("");

  useEffect (() => {
    async function contractInfo() {
      setManager( await lottery.methods.manager().call());  // call does not need explicit account, default will be first account in array
      setPlayers( await lottery.methods.getPlayers().call());
      setBalance( await web3.eth.getBalance(lottery.options.address));
      const accounts = await web3.eth.getAccounts()
      setAccount( accounts[0] );
    }
    contractInfo();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    setMessage("Waiting on transaction confirmation...");

    await lottery.methods.enter().send({  
      from: accounts[0],
      value: web3.utils.toWei(value, 'ether')
    });

    setMessage("You have successfully been entered!");
  };

  const onClick = async () => {
    const accounts = await web3.eth.getAccounts();
    setMessage("Drumroll please...");

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    setMessage("A winner has been picked! Thanks for playing!");
  };

  const pickAWinner = async () => {
    const accounts = await web3.eth.getAccounts();
    if(accounts[0] === manager){
      
    }
  }

  return (
    <div>
      <h2>Ethereum Lottery Contract</h2>
      <p>
        This contract is managed by {manager}. <br/>
        There are currently {players.length} people entered, <br/>
        competing to win {web3.utils.fromWei(balance)} ether!
      </p>
      <hr/>
      <form onSubmit={onSubmit}>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of ether to enter (must be more than .01 ether)</label>
          <input
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </div>
        <button>Enter</button>
      </form>
      <hr/>
      {account === manager &&
        <div>
          <h4>Ready to pick a winner?</h4>
          <button onClick={onClick}>Pick a winner</button>
          <hr/>
        </div>
      }
      <h1>{message}</h1>
    </div>
  );
}

export default App;
