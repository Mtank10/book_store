const {createBook, getAllBooks, getBookById, updateBookById, deleteBookById} = require('../services/bookService')

const createBookController = async (req, res) => {
    const { title, author, category, price,
        description, publication_year, image
    } = req.body
    try {
        const newBook = await createBook({ title, author, category, price,publication_year,image,description })
        res.status(201).json({
            success: true,
            data: newBook
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Get all books

const getAllBooksController = async (req, res) => {
    try {
        const books = await getAllBooks()
        res.status(200).json({
            success: true,
            data: books
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// get book by id
const getBookByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await getBookById(id)
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'No book found with this id'
            })
        }
        res.status(200).json({
            success: true,
            data: book
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Update book by id
const updateBookByIdController = async (req, res) => {
    const { id } = req.params
    const { title, author, category, price,image,description,publication_year } = req.body
    try {
        const updatedBook = await updateBookById(id, { title, author, category, price,image,description,publication_year })
        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: 'No book found with this id'
            })
        }
        res.status(200).json({
            success: true,
            data: updatedBook
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//Delete book by id
const deleteBookByIdController = async (req, res) => {
    const { id } = req.params
    try {
        const deletedBook = await deleteBookById(id)
        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: 'No book found with this id'
            })
        }
        res.status(200).json({
            success: true,
            data: deletedBook
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createBookController,
    getAllBooksController,
    getBookByIdController,
    updateBookByIdController,
    deleteBookByIdController
}