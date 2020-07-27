import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function SearchBox() {
    const classes = useStyles();

    return (
    <div className="card">
        <div className="card-body">
            <h3>Search for a Book</h3>
            <form className="form" noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Enter a Book"/>
                <Button
                className={classes.button}
                variant="contained"
                color="primary"
                endIcon={<SearchIcon/>}>
                Search
                </Button>
            </form>
        </div>
    </div>
    )
}

