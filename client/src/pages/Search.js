import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Box, Container } from '@material-ui/core';
import SearchBox from "../components/SearchBox/index";

function Search() {
  // const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})

  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // function loadBooks() {
  //   API.getBooks()
  //     .then(res => 
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.title && formObject.author) {
  //     API.saveBook({
  //       title: formObject.title,
  //       author: formObject.author,
  //       synopsis: formObject.synopsis
  //     })
  //       .then(res => loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

    return (
      <Container>
        <Box>
          <SearchBox></SearchBox>
        </Box>
      </Container>
    );
  }


export default Search;
