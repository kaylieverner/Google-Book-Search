import React, { useState } from "react";
import API from "../utils/API";
import { Box, Container, Grid, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import SearchBox from "../components/SearchBox/index";
import ResultContainer from "../components/ResultContainer/index";
import ResultCard from "../components/ResultCard/index";
import ConfirmationDiv from "../components/ConfirmationDiv/index"
import { makeStyles } from '@material-ui/core/styles';
import "../style.css"

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
    setSearchTerm(event.target.value);
  };

  //form submit if user clicks search icon button
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

    //form submit if user clicks enter
    function onFormSubmit(event){
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
    }

     
  function populateResults(){
    if (results.length > 0){
      return results.map((result, index) => (
        <ResultCard
          results={results}
          id={index}
          src={result.volumeInfo.imageLinks.thumbnail}
          title={result.volumeInfo.title}
          author={result.volumeInfo.authors}
          summary={result.volumeInfo.description}
          LbtnText={<a target="_blank" href={result.accessInfo.webReaderLink} rel="noopener noreferrer">View</a>}
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
        <ConfirmationDiv/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.box}>
              <SearchBox>
                <form className="form" noValidate autoComplete="off" onSubmit={onFormSubmit}>
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
              <ResultContainer results={results}>
                {populateResults()}
              </ResultContainer>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }


export default Search;
