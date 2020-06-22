const CONTRACT_DATA = {
  abi: [
    {
      constant: true,
      inputs: [],
      name: "manager",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "pickWinner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getPlayers",
      outputs: [{ name: "", type: "address[]" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "enter",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "", type: "uint256" }],
      name: "players",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    }
  ],
  address: '0x3eca8a7cbd3f70d9b345a6f604a43a236a1be2bc'
};

module.exports = {
  CONTRACT_DATA
};
