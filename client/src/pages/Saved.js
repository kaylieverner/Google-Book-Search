import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

function Saved(props) {
  const [savedBooks, setSavedBooks] = useState([]);
  const [error, setError] = useState([]);

  //upon loading the page, load saved books to populate the saved books into the Books list  
  useEffect(() => {
    loadSavedBooks()
  }, [])

  function loadSavedBooks() {
    API.getSavedBooks()
    .then(res => 
      setSavedBooks(res.data)
    )
    .then(console.log(savedBooks))
    .catch(err => console.log(err));
    };
  
  // const [book, setBook] = useState({})

  // // When this component mounts, grab the book with the _id of props.match.params.id
  // // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams()
  // useEffect(() => {
  //   API.getBook(id)
  //     .then(res => setBook(res.data))
  //     .catch(err => console.log(err));
  // }, [])

  const classes = useStyles();

  return (
    <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Box className={classes.box}>
              <ResultContainer title={"Saved Books"}
              resultCard={<ResultCard
                src={"https://via.placeholder.com/150"}
                title={"Harry Potter"}
                tagline={"Book about wizards"}
                author={"JK Rowling"}
                summary={"lorem ipsum stuff about harry potter summary stuff"}
                LbtnText={"View"}
                RbtnText={"Delete"}
                ></ResultCard>} 
              >
              </ResultContainer>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }


export default Saved;
