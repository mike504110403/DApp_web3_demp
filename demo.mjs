import { Web3 } from 'web3'

const web3 = new Web3('https://mainnet.infura.io/v3/990e81ed3ffe4c8bac114cfbb9f8642b')
// #region 區塊鍊連接相關
// await web3.eth.getBlockNumber().then(blockNumber => {
//     console.log('BlockNumber: ', blockNumber)
// })
// 
// await web3.eth.getBalance('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045').then(balance => {
//     console.log('Balance: ', balance)
// })
// 
// await web3.eth.getTransactionCount('0x37826D8B5F4B175517A0f42c886f8Fca38C55Fe7').then(transactionCount => {
//     console.log('TransactionCount: ', transactionCount)
// })
// 
// await web3.eth.getGasPrice().then(gasPrice => {
//     console.log('GasPrice: ', gasPrice)
// })
// #endregion

// #region 錢包創建相關
// web3.eth.accounts.wallet.create(1)
const account = web3.eth.accounts.wallet.add('0x1c663df138e3b2d103373fb977a97848ceb27d3ae56ab750f965c2184df16dd3')
console.log(account)
// #endregion

// #region 交易相關
// const tx = 
// { 
//     from: account[0].address,
//     to: '0xa3286628134bad128faeef82f44e99aa64085c94', 
//     value: web3.utils.toWei('1', 'ether')
// }
// const txReceipt = await web3.eth.sendTransaction(tx)
// console.log(tx)
// console.log('Tx hash:', txReceipt.transactionHash)
// #endregion