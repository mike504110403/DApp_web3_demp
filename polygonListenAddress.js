import { Network, Alchemy } from 'alchemy-sdk'

const settings = {
    apiKey: "JN8HmfWuZmC3VrWUqWRhCQWsF_htwrTz",
    network: Network.MATIC_AMOY,
}

const alchemy = new Alchemy(settings)

const targetAddress = '0x341b438167c9CFF37d323927E65B3f553c2754AA'
const usdtContractAddress = '0xC8Ec31F4F7C25Eb4e7F88db77565333A8f364Fe8'

// 設置輪詢間隔時間（例如每30秒）
//const pollingInterval = 30000

const startTime = Date.now() / 1000 - 300
//const endTime = Date.now() / 1000 +7200


// 查詢時間區間內的區塊號
async function getBlockNumberByTimestamp(timestamp) {
    const blockNumber = await alchemy.core.getBlockNumber({
        timestamp: Math.floor(timestamp)
    });
    return blockNumber;
}

// 查詢交易記錄
async function checkIncomingTransactions() {
    try {

        const startBlock = await getBlockNumberByTimestamp(startTime)
        // 獲取當前區塊號
        const latestBlock = await alchemy.core.getBlockNumber()
        console.log(`Checking blocks from ${startBlock} to ${latestBlock}`)

        // 獲取最近的交易記錄
        const transactions = await alchemy.core.getAssetTransfers({
            fromBlock: startBlock,
            toBlock: latestBlock,
            toAddress: targetAddress,
            contractAddresses: [usdtContractAddress],
            category: ["erc20"]
        });

        console.log('Incoming transactions:', transactions);
        if (transactions.transfers[0]){
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error('Error checking transactions:', error);
    }
}

//setInterval(checkIncomingTransactions, pollingInterval)
// 初次運行時立即檢查一次
console.log(await checkIncomingTransactions())