const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    collect_id: String,
    school_id: String,
    gateway: String,
    order_amount: Number,
    transaction_amount: Number,
    status: String,
    custom_order_id: String
});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;