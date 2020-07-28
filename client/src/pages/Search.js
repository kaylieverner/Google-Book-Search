import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Box, Container, Grid } from '@material-ui/core';
import SearchBox from "../components/SearchBox/index";
import ResultContainer from "../components/ResultContainer/index";
import ResultCard from "../components/ResultCard/index";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2),
  }
}));

function Search() {
  const [searchTerm, setSearchTerm] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
  }, [])

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchTerm({...searchTerm, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    API.getBooks(searchTerm)
    .then((result) => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setResults({results: res.data})
    })
    .catch(err => this.setState({ error: err.message }));
    }

  

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

  function populateResults(){
    if (results.length > 0){
      results.map(result => (
        <ResultCard
          key={result.id}
          src={result.thumbnail}
          title={result.title}
          tagline={result.textSnippet}
          author={result.authors}
          summary={result.description}
          LbtnText={"View"}
          RbtnText={"Save"}
        ></ResultCard>
      ))
      
    } else {
      <ResultCard
                src={"https://via.placeholder.com/150"}
                title={"No Results"}
                ></ResultCard>
    }
  };

  

  const classes = useStyles();

    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.box}>
              <SearchBox 
              title={"Search for a Book"}
              label={"Book Title"}
              onChange={handleInputChange}
              onChange={handleFormSubmit}
              ></SearchBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box className={classes.box}>
              <ResultContainer title={"Results"}
              resultCard={<ResultCard
                src={"https://via.placeholder.com/150"}
                title={"Harry Potter"}
                tagline={"Book about wizards"}
                author={"JK Rowling"}
                summary={"lorem ipsum stuff about harry potter summary stuff"}
                LbtnText={"View"}
                RbtnText={"Save"}
                ></ResultCard>}>
                </ResultContainer>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }


export default Search;
