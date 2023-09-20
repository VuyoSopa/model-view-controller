//in here we define the routes for the book api

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/create', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.deleteOne)

// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;