import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function SearchBox(props) {
    const classes = useStyles();

    return (
    <div className="card">
        <div className="card-body">
        <h3>{props.title}</h3>
            <form className="form" noValidate autoComplete="off">
                <TextField id="outlined-basic" label={props.label}/>
                <Button
                className={classes.button}
                variant="contained"
                color="primary"
                endIcon={<SearchIcon/>}>
                {props.btnText}
                </Button>
            </form>
        </div>
    </div>
    )
}