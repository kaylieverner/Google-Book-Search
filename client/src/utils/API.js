import axios from "axios";

export default {
  // Gets books from Google Books API based on search 
  getBooks: function(searchTerm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets books saved by user from database
  getSavedBooks: function() {
    return axios.get("/api/books")
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
};
