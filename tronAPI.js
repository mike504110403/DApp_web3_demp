import axios from 'axios'

const TRONGRID_API_KEY = '61ac6274-6cfd-4f67-b1d0-daf26abcbe35'
const targetAddress = 'TM9DkRTH8GiTWUrVNZT99Kiq5rE48jDrPB'
const contractAddress = 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj'
const startTime = Date.now() - 300000 // 指定時間段的開始時間（這裡設置為一小時前）
const endTime = Date.now() // 指定時間段的結束時間（這裡設置為現在時間）
const testAPIKey = '0a8a4cea-76b6-4abc-8360-003d26707591'

async function getContractEvents() {
    try {
        const url = `https://nile.trongrid.io/v1/accounts/${targetAddress}/transactions/trc20?order_by=block_timestamp%2Cdesc&min_timestamp=${startTime}&max_timestamp=${endTime}&contract_address=${contractAddress}&only_to=true`
        const response = await axios.get(url, {
            headers: {
                'TRON-PRO-API-KEY': TRONGRID_API_KEY
            }
        });

        const data = response.data;
        console.log('Response:', data);
        if (data[0]){
            return true
        } else {
            return false
        }
        // 在這裡處理回應數據，檢查是否有收入等等
    } catch (error) {
        console.error('Error fetching contract events:', error);
    }
}

console.log(await getContractEvents());