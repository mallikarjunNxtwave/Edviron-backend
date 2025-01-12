const Transaction = require("../modules/transactions")
const csvtojson = require("csvtojson")

const getTransactions = async(req,res) => {
    try {
        const allTransactions = await Transaction.find();
        res.status(200).json({transactions: allTransactions});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const getTransactionsBySchool = async (req,res) => {
    try {
        const {school_id} = req.params
        const schoolTransactions = await Transaction.find({school_id})
        res.status(200).json({trancsations: schoolTransactions})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
const statusCheck = async (req,res) => {
    try {
        const {custom_order_id} = req.params
        const transaction = await Transaction.find({custom_order_id})
        res.status(200).json({transaction})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const updateStatus =  async (req,res) => {
    try {
        const {custom_order_id} = req.params
        const {status} = req.body
        if(!["SUCCESS", "PENDING", "FAILURE"].includes(status)){
            return res.status(400).json({message: "Invalid Status"})
        }
        const transaction = await Transaction.findOneAndUpdate({custom_order_id}, {status})
        if(!transaction){
            return res.status(400).json({message: "Transaction Not Found"})
        }
        res.status(200).json({message: "Status Updated successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports = {getTransactions,getTransactionsBySchool,statusCheck,updateStatus};
