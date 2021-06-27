const Transactions = require('../models/transaction');

class TransactionController {
    constructor() {}

    static async fetchAllAsync() {
        try {
            const transactions = await Transactions.find({});
            return transactions;
        } catch (exception) {
            return { message: exception.message };
        }
    }

    static async fetchByIdAsync(transaction_id) {
        try {
            // .exec is required here according to docs
            const transaction = await Transactions.findById(transaction_id).exec();
            return transaction;
        } catch (exception) {
            return { message: exception.message };
        }
    }

    static async addTransactionAsync(transaction) {
        
    }

}

module.exports = TransactionController;