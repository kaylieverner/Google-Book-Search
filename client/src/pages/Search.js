import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Box, Button, Container, Grid, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import SearchBox from "../components/SearchBox/index";
import ResultContainer from "../components/ResultContainer/index";
import ResultCard from "../components/ResultCard/index";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  }
}));

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  function handleFormSubmit(event) {
      event.preventDefault();
      API.getBooks(searchTerm)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        }
        setError("");
        setResults(res.data.items)
      })
      // .then(res => setResults(res.data.items))
      .then(console.log(results))
      .catch(err => setError({ error: err.message }));
      };

     
  function populateResults(){
    if (results.length > 0){
      return results.map((result, index) => (
        <ResultCard
          resultState={result}
          id={index}
          src={result.volumeInfo.imageLinks.thumbnail}
          title={result.volumeInfo.title}
          // tagline={result.searchInfo.textSnippet}
          author={result.volumeInfo.authors}
          summary={result.volumeInfo.description}
          LbtnText={<a target="_blank" href={result.accessInfo.webReaderLink}>View</a>}
          RbtnText={"Save"}>
        </ResultCard>
      )) 
    } else {
      return <h2>No Results to Show</h2>
    }
  };

  const classes = useStyles();
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.box}>
              <SearchBox>
                <form className="form" noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="search" onChange={handleInputChange}/>
                  <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleFormSubmit}>
                      <SearchIcon />
                  </IconButton>
                </form>
              </SearchBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box className={classes.box}>
              <ResultContainer>
                {populateResults()}
              </ResultContainer>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }


export default Search;
