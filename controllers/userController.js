const User = require("../modules/user")
const dotEnv = require("dotenv")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

dotEnv.config();

const registerUser = async (req,res) => {
    const {username, password} = req.body
    try {
        const dbUsername = await User.findOne({username})
        if(dbUsername){
            return res.status(400).json({message: "username already taken"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            password: hashedPassword
        })
        await newUser.save();
        res.status(200).json({message: "User rigistered successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const userlogin = async (req,res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(user === null){
            return res.status(400).json({message: "Invalid User"})
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if(isPasswordMatched){
            const payload = {
                username
            }
            const jwt_token = jwt.sign(payload, await process.env.SECRET_KEY)
            res.status(200).json({jwt_token})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {registerUser, userlogin};