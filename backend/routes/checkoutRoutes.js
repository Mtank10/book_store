const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');
const isAdmin = require('../middleware/isAdmin');
const authMiddleware = require('../middleware/authMiddleware');

// User checkout
router.post('/checkout',authMiddleware, checkoutController.checkoutController);

// Admin view all checkouts
router.get('/checkouts', isAdmin, checkoutController.viewAllCheckoutsController);

module.exports = router;
