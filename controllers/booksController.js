const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //Write the book data to the DB upon clicking the save button on the Search page
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
          console.log(err)
          res.status(422).json(err)
          });
  },
  //Did not use the below yet 
  findAll: function(req, res) {
    console.log(req.query)
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
