const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/api/books")
  .get(booksController.findAll) //* `/api/books` (get) - Should return all saved books as JSON.
  .post(booksController.create); //* `/api/books` (post) - Will be used to save a new book to the database.

// Matches with "/api/books/:id"
router
  .route("/api/books/:id")
  .delete(booksController.findById) // * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.


module.exports = router;
