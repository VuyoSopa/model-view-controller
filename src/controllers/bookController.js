//in here we define CRUD operations

const res = require('express/lib/response');
const Book = require('../models/book');
const req = require('express/lib/request');
const book = require('../models/book');

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 

// Implement other CRUD operations (getBookById, updateBook, deleteBook) here...

exports.getBookById = async (req, res) => {
const id = req.params.id

    try {
        const books = await Book.findById(id);
        res.status(200).json(books);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };

    exports.update = async (req, res) => {
        const id = req.params.id
        try {
            const books = await Book.findByIdAndUpdate(id, req.body);
            res.status(200).json(books);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    };

    exports.deleteOne = async (req, res) =>{

        const id = req.params.id

        try {
            const books = await Book.findByIdAndDelete(id, req.body);
            res.status(200).json(books);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
