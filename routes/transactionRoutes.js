const transactionController = require("../controllers/transactionController")
const express = require("express");
const dotEnv = require("dotenv")
const jwt = require("jsonwebtoken")

dotEnv.config();

const router = express.Router();

const authenticateToken = (req,res,next) => {
    let jwtToken = ''
    const authHeader = req.headers["authorization"]
    if(authHeader !== undefined){
        jwtToken = authHeader.split(" ")[1]
    }
    if(jwtToken === undefined){
        res.status(400).json({message: "Invalid Token"})
    }else {
        jwt.verify(jwtToken,process.env.SECRET_KEY, async (error,payload) => {
            if(error){
                res.status(400).json({message: "Invalid Token"})
            }else {
                next()
            }
        })
    }
}

router.get('/transactions', transactionController.getTransactions)

router.get("/transactions/:school_id", transactionController.getTransactionsBySchool)

router.get("/transaction/:custom_order_id", transactionController.statusCheck)

router.post("/transaction/:custom_order_id", authenticateToken, transactionController.updateStatus)

module.exports = router;