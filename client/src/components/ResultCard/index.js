import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    }
  }));

export default function ResultCard(props) {
    const classes = useStyles();

    function saveBook(event){
        event.preventDefault();
        console.log("saved")
        API.saveBook({
            src: props.results[props.id].volumeInfo.imageLinks.thumbnail,
            href: props.results[props.id].accessInfo.webReaderLink,
            title: props.results[props.id].volumeInfo.title,
            author: props.results[props.id].volumeInfo.authors.toString(),
            summary: props.results[props.id].volumeInfo.description
          })
          .catch(err => console.log(err));
        };

    function deleteBook(props){
        console.log("delete")
        API.deleteBook(props.savedBooks._id)
        .then(res => props.loadSavedBooks())
        .catch(err => console.log(err))
    };
      
    return (
        <div className="card mb-2" id={props.id}>
            <div className="card-body">
                <div className="media">
                <img className="mr-3" src={props.src} alt="Cover Art"/>
                    <div className="media-body">
                    <h5 className="mt-0" id="bookTitle">{props.title}</h5>
                    <p id="tagline">{props.tagline}</p>
                    <p id="author">{props.author}</p>
                    <p id="summary">{props.summary}</p>
                    </div>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary">
                        {props.LbtnText}
                    </Button>
                    <Button
                        onClick={props.RbtnText === "Save" ? saveBook : deleteBook(props.savedBooks)}
                        className={classes.button}
                        variant="contained"
                        color="primary">
                        {props.RbtnText}
                    </Button>
                </div>
            </div>
        </div>
    
    )
}