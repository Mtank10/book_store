const express = require('express')

const router = express.Router()

const bookController = require('../controllers/bookController')
const isAdmin = require('../middleware/isAdmin')
router.post('/',isAdmin, bookController.createBookController);
router.get('/', bookController.getAllBooksController);
router.get('/:id', bookController.getBookByIdController);
router.put('/:id',isAdmin, bookController.updateBookByIdController);
router.delete('/:id',isAdmin, bookController.deleteBookByIdController);

module.exports = router;