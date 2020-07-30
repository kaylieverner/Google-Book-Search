const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({ 
  src: { type: String, required: true },
  href: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  summary: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
