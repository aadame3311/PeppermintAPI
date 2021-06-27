const mongoose = require('mongoose');

const transaction_schema = new mongoose.Schema({
    account_id: {
        type: Number,
        required: true
    },
    transaction_id: {
        type: Number, 
        required: true
    },
    amount: {
        type: mongoose.Types.Decimal128
    },
    date: {
        type: Date
    },
    iso_currency_code: {
        type: String
    },
    merchant_name: {
        type: String
    }
});

module.exports = mongoose.model('Transaction', transaction_schema);