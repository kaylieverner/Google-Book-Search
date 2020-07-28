import React from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function SearchBox({children}) {
    const classes = useStyles();

    return (
    <div className="card">
        <div className="card-body">
        <h3>Search</h3>
        {children}
        </div>
    </div>
    )
}