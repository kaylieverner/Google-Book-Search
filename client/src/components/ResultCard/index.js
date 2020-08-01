import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../../utils/API";
import './index.css';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    }
  }));

export default function ResultCard(props) {
    const classes = useStyles();
    console.log(props)

    function saveBook(){
        console.log("saved")
        confirmSaved();
        API.saveBook({
            src: props.results[props.id].volumeInfo.imageLinks.thumbnail,
            href: props.results[props.id].accessInfo.webReaderLink,
            title: props.results[props.id].volumeInfo.title,
            author: props.results[props.id].volumeInfo.authors.toString(),
            summary: props.results[props.id].volumeInfo.description
          })
          .catch(err => console.log(err));
        };

        function confirmSaved(){
            document.getElementById("savedMsg").classList.remove("hidden");
            document.getElementById("savedMsg").innerHTML = "Book Saved Successfully!"
        }

    function deleteBook(id){
        console.log("delete")
        API.deleteBook(id)
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
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary">
                        {props.LbtnText}
                    </Button>
                    <Button
                        onClick={props.RbtnText === "Save" ? saveBook : deleteBook(props.savedBooks[props.id]._id)}
                        className={classes.button}
                        variant="contained"
                        color="primary">
                        {props.RbtnText}
                    </Button>
                </div>
            </div>
        </div>
    </div>

    )
}