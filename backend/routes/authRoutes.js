const express = require('express');
const router = express.Router();
 const authController = require('../controllers/authController');
const authAdminController = require('../controllers/authAdminController');

router.post('/register', authController.userSignup);
router.post('/login', authController.userSignin);
router.post('/logout', authController.userLogout);
// Admin routes
router.post('/admin/register', authAdminController.adminSignup);
router.post('/admin/login', authAdminController.adminSignin);
router.post('/admin/logout', authAdminController.adminLogout);

module.exports = router;
