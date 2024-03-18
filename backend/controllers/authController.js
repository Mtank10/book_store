const {getUserByEmail, createUser} = require('../services/authService')
const {comparePassword,generateToken} = require('../utils/util')
const userSignup = async (req, res) => {
    const { username, name, email, password } = req.body
    try{
        const user = await getUserByEmail(email)
        if(user){
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }
        const newUser = await createUser({ username, name, email, password })
        return res.status(201).json({
            success: true,
            data: newUser
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
//User signin
const userSignin = async(req,res) => {
    const { email, password } = req.body
    try{
        const user = await getUserByEmail(email)
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        const isMatch = await comparePassword(password, user.password)
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }
        const token = await  generateToken({userId: user.id })
        res.cookie('token', token, {httpOnly: true})
        return res.status(200).json({
            success: true,
            data: token
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//user logout
const userLogout = async (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({
        success: true,
        message: 'Logged out successfully'
    })
}
module.exports = {
    userSignup,
    userSignin,
    userLogout
}