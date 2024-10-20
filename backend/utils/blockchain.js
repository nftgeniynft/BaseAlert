const Web3 = require('web3');
const web3 = new Web3(process.env.BASE_RPC_URL);

async function trackAddress(address, callback) {
    web3.eth.subscribe('pendingTransactions', (err, txHash) => {
        if (err) console.error(err);
        
        web3.eth.getTransaction(txHash, (err, tx) => {
            if (tx && tx.to === address) {
                callback(tx); // Call the provided callback with transaction details
            }
        });
    });
}

module.exports = { trackAddress };
