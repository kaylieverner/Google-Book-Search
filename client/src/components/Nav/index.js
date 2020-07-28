import React from "react";
import { Paper, Tabs, Tab } from '@material-ui/core';

function Nav() {
  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        aria-label="tabs"
      >
        <Tab label="Google Books Search" href="/"/>
        <Tab label="Search" href="/search"/>
        <Tab label="Saved" href="/saved"/>
      </Tabs>
    </Paper>
  );
}

export default Nav;
