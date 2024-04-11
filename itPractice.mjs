import { Web3 } from 'web3'

const web3 = new Web3('https://mainnet.infura.io/v3/990e81ed3ffe4c8bac114cfbb9f8642b')

let address = '0xF977814e90dA44bFA03b6295A0616a897441aceC'
address = '0xca43251DD55011f1436B5B6D90D12c5F8cee5e29'
// web3.eth.getBalance(address, (err, wei) => {
//     balance = web3.utils.fromWei(wei, 'ether')
//     console.log("balance: ", balance)
// })
web3.eth.getBalance(address).then(balance => {
    console.log("balance: ", web3.utils.fromWei(balance, 'ether'))
}).catch(err => {
    console.log(err)
})