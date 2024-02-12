// Connect to contract
const web3 = new Web3(window.ethereum);
const contractAddress = 'your_contract_address_here';
const contractABI = [...]; // Insert ABI here
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Interaction with contract functions
function donate() {
  const amount = document.getElementById('donationAmount').value;
  contract.methods.donate().send({ value: amount, from: ethereum.selectedAddress });
}

function getDonation(address) {
  contract.methods.getDonation(address).call().then((donation) => {
    console.log('Donation amount:', donation);
  });
}
