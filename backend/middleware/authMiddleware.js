const {verifyToken} = require('../utils/util');
const prisma = require('../models/index');
const authMiddleware = async (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            success: false,
            message: 'Unauthorized'
        })
    }
    try{
        const decodedToken = verifyToken(token);
        const user = await prisma.user.findUnique({
            where:{
                id: decodedToken.userId
            }
        })
        if(!user || user.role==='admin'){
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            })
        }
        req.user = user
        next();
    }
    catch(error){
        return res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = authMiddleware