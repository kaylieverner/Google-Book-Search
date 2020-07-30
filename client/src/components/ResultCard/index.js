import React, { useState } from 'react';
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
    const [savedBooks, setSavedBooks] = useState([]);

    function saveBook(event){
        console.log("saveBook function hit");
        event.preventDefault();
      }

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
                        onClick={saveBook}
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