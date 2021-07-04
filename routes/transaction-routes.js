const express = require('express');
const routes = express.Router();
const Transactions = require('../models/transaction');
const TransactionsController = require('../controllers/transaction-controller');

// transactions/
routes.get('/', async (req, res) => {
    
    const transactions = await TransactionsController.fetchAllAsync();
    res.json(transactions);

});

//transactions/:id
routes.get('/:id', async (req, res) => {

    const transactions = await TransactionsController.fetchByIdAsync(req.params.id);
    res.json(transactions);

})