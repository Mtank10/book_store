const prisma = require('../models/index');

//create new book
const createBook = async (book)=>{
    const newBook = await prisma.book.create({
        data:{
            title:book.title,
            author:book.author,
            image:book.image,
            description:book.description,
            publication_year:book.publication_year,
            category:book.category,
            price:book.price,

        }
    })
    return newBook;
}

//Get all books
const getAllBooks = async ()=>{
    const books = await prisma.book.findMany();
    return books;
}

//Get book by Id
const getBookById = async (id)=>{
    const book = await prisma.book.findUnique({
        where:{
            id:id
        }
    });
    return book;
}

//Update book by id
const updateBookById = async (id,book)=>{
    const updatedBook = await prisma.book.update({
        where:{
            id:id
        },
        data:book
    });
    return updatedBook;
}

//Delete book by id
const deleteBookById = async (id)=>{
    const deletedBook = await prisma.book.delete({
        where:{
            id:id
        }
    });
    return deletedBook;
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
}