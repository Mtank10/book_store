const prisma = require('../models/index');

//User checkout
const checkout = async (data) => {
    const createdCheckout = await prisma.checkout.create({
        data: {
            userId: data.userId,
            bookId: data.bookId,
            quantity: data.quantity
        }
    })
    return createdCheckout
}

const viewAllCheckouts = async () => {
    const checkouts = await prisma.checkout.findMany();
    return checkouts
}

module.exports = {
    checkout,
    viewAllCheckouts
}