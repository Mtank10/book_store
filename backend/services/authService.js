const prisma = require('../models/index');
const {hashPassword, comparePassword, generateToken, verifyToken} = require('../utils/util');

//get user by email
const getUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return user
}

const createUserWithAdmin = async (user) => {
    const hashedPassword = await hashPassword(user.password);
    const createdUser = await prisma.user.create({
        data: {
            username: user.username,
            name: user.name,
            email: user.email,
            role: 'admin',
            password: hashedPassword
        }
    })
    return createdUser
}
const createUser = async (user) => {
    const hashedPassword = await hashPassword(user.password);
    const createdUser = await prisma.user.create({
        data: {
            username: user.username,
            name: user.name,
            email: user.email,
            password: hashedPassword
        }
    })
    return createdUser
}

module.exports = {
    getUserByEmail,
    createUserWithAdmin,
    createUser
}