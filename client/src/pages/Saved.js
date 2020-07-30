import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Box, Container, Grid } from '@material-ui/core';
import ResultContainer from "../components/ResultContainer/index";
import ResultCard from "../components/ResultCard/index";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2),
  }
}));

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);
  const [error, setError] = useState([]);

  //upon loading the page, load saved books to populate the saved books into the Books list  
  useEffect(() => {
    loadSavedBooks()
  }, [])

useEffect(() => {
    console.log(savedBooks)
  }, [savedBooks])

  function loadSavedBooks() {
    API.getSavedBooks()
    .then(res => {
      setSavedBooks(res.data)
      console.log(savedBooks)
      }
    )
    .catch(err => console.log(err));
    };

    function populateSavedResults(){
      if (savedBooks.length > 0){
        console.log(savedBooks)
        return savedBooks.map((savedBook, index) => (
          <ResultCard
            savedBooks={savedBooks}
            id={index}
            src={savedBook.src}
            title={savedBook.title}
            author={savedBook.authors}
            summary={savedBook.summary}
            LbtnText={<a target="_blank" href={savedBook.href}>View</a>}
            RbtnText={"Delete"}>
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
          <Grid item xs={12} sm={12}>
            <Box className={classes.box}>
              <ResultContainer loadSavedBooks={loadSavedBooks}>
                {populateSavedResults()}
              </ResultContainer>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }


export default Saved;
