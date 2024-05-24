import axios from 'axios'

const ALCHEMY_API_KEY = 'JN8HmfWuZmC3VrWUqWRhCQWsF_htwrTz';
const targetAddress = '0x341b438167c9CFF37d323927E65B3f553c2754AA';
const usdtContractAddress = '0xC8Ec31F4F7C25Eb4e7F88db77565333A8f364Fe8';
const startTime = Math.floor(Date.now() / 1000) - 300;

async function getAssetTransfers() {
    try {
        const response = await axios.get(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}/events?contract=${usdtContractAddress}&address=${targetAddress}&from_block=${startTime}&to_block=latest&only_external=true&only_from=true&category=erc20`);
        
        const data = response.data;
        console.log('Response:', data);

        // 檢查收入
        if (data && data.length > 0) {
            console.log('Income detected!');
        } else {
            console.log('No income detected.');
        }
    } catch (error) {
        console.error('Error fetching asset transfers:', error);
    }
}

getAssetTransfers();
