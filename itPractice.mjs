import { Web3 } from 'web3'

const web3 = new Web3('https://mainnet.infura.io/v3/990e81ed3ffe4c8bac114cfbb9f8642b')

let address = '0xF977814e90dA44bFA03b6295A0616a897441aceC'
address = 'TKAtJNq7oTvK5Nh43nWRffncP8wbfSAHuR'

// 取得指定地址在 eth 鍊上 的 eth 餘額
web3.eth.getBalance(address).then(balance => {
    console.log("balance: ", web3.utils.fromWei(balance, 'usdt'))
}).catch(err => {
    console.log(err)
})

// #region 合約資訊
// BNB 的 ABI
const bnbAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"unfreeze","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"freezeOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"freeze","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Unfreeze","type":"event"}]
// 合約地址
const bnbAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
// 合約對象
const contract = new web3.eth.Contract(bnbAbi, bnbAddress)

/*
用 call() 來呼叫，而不是改寫，改寫算交易
*/
// 查看總供應量
await contract.methods.totalSupply().call().then(totalSupply => {
    console.log(totalSupply)
}).catch(err => {
    console.log(err)
})
// 查看合約名稱
await contract.methods.name().call().then(name => {
    console.log(name)
}).catch(err => {
    console.log(err)
})
// 查看合約標誌
await contract.methods.symbol().call().then(symbol => {
    console.log(symbol)
}).catch(err => {
    console.log(err)
})
// 查看指定合約指定帳戶的餘額 => 這邊指的是代幣 => BNB
await contract.methods.balanceOf('0xB8c77482e45F1F44dE1745F52C74426C631bDD52').call().then(balance => {
    console.log(balance)
}).catch(err => {
    console.log(err)
})
// #endregion