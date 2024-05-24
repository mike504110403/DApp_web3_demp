import TronWeb from 'tronweb'

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',  // Tron節點的API端點
    solidityNode: 'https://api.trongrid.io',  // Tron節點的Solidity端點
    eventServer: 'https://api.trongrid.io',  // Tron節點的事件服務器
    //privateKey: 'YOUR_PRIVATE_KEY',  // 如果需要簽署交易，請提供您的私鑰
})

const targetAddress = 'TS6urXysWjkaZMQFNodVAYSTAfGSnsSSkY'  // 欲監聽的Tron地址
const usdtContractAddress = '0xC8Ec31F4F7C25Eb4e7F88db77565333A8f364Fe8'  // Tron上的USDT合約地址

// 設置時間區間（例如過去1小時）
const startTime = Math.floor(Date.now() / 1000) - 300; // Unix時間戳，1小時前

// 查詢交易記錄
async function checkIncomingTransactions() {
    try {
        // 獲取時間區間內的區塊號
        const startBlock = await tronWeb.trx.getBlockByTimestamp(startTime)
        const endBlock = await tronWeb.trx.getCurrentBlock()

        console.log(`Checking blocks from ${startBlock.block_header.raw_data.number} to ${endBlock.block_header.raw_data.number}`)

        // 獲取最近的交易記錄
        const transactions = await tronWeb.trx.getTransactionsRelated(targetAddress, "to", startBlock.block_header.raw_data.number, endBlock.block_header.raw_data.number)

        console.log('Incoming transactions:', transactions)

        if (transactions.length > 0) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error('Error checking transactions:', error)
    }
}

// 初次運行時立即檢查一次
console.log(await checkIncomingTransactions())