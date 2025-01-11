const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")

const userRoutes = require('./routes/userRoute')

const transactionroutes = require('./routes/transactionRoutes')

const bodyParser = require("body-parser")

const PORT = 4000;
const app = express()

app.use(express.json())

app.use(cors());

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo DB Connected Successfully"))
    .catch(error => console.log(error));

app.use(bodyParser.json())

app.use('/', transactionroutes);
app.use('/', userRoutes)


app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})
