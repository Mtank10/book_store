//create bcryptjs password compare jsonwebtoken sign or verify.
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    hashPassword: async (password) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    },
    comparePassword: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    },
    generateToken: (payload) => {
        return jwt.sign(payload, process.env.JWT_SECRET);
    },
    verifyToken: (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}