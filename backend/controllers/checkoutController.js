
const { checkout, viewAllCheckouts } = require('../services/checkoutService')
//User checkout

const checkoutController = async (req, res) => {
    const { userId, bookId, quantity } = req.body
    try {
        const newCheckout = await checkout({ userId, bookId, quantity })
        res.status(201).json({
            success: true,
            data: newCheckout
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const viewAllCheckoutsController = async (req, res) => {
    try {
        const checkouts = await viewAllCheckouts()
        res.status(200).json({
            success: true,
            data: checkouts
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    checkoutController,
    viewAllCheckoutsController
}