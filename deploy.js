const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const compiledContract = require('./build/ALSContract.json');

const provider = new HDWalletProvider({
  mnemonic: {
    phrase: 'your mnemonic phrase here'
  },
  providerOrUrl: 'https://ropsten.infura.io/v3/your_infura_project_id'
});

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledContract.interface))
    .deploy({ data: '0x' + compiledContract.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed to', result.options.address);
};
deploy();
