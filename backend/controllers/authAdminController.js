const {getUserByEmail, createUserWithAdmin} = require('../services/authService')
const { comparePassword, generateToken, verifyToken} = require('../utils/util')
//Admin signup
const adminSignup = async (req, res) => {
    const { username, name, email, password } = req.body
    try{
        const user = await getUserByEmail(email)
        if(user){
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }
        const newAdmin = await createUserWithAdmin({ username, name, email, password });
        return res.status(201).json({
            success: true,
            data: newAdmin
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
//Admin signin
const adminSignin = async(req,res) => {
    const { email, password } = req.body
    try{
        const admin = await getUserByEmail(email);
        if(!admin || admin.role!=='admin'){
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }
        const isMatch = await comparePassword(password, admin.password);
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }
        const token = await  generateToken({userId: admin.id});
        res.cookie('token', token, {httpOnly: true})
        return res.status(200).json({
            success: true,
            data: token
        })

    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//logout admin
const adminLogout = async (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({
        success: true,
        message: 'Admin logged out successfully'
    })
}

module.exports = {
    adminSignup,
    adminSignin,
    adminLogout
}