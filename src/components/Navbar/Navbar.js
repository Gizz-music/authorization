import React from 'react';
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import "./Navbar.css";


const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="flex-end">
          <button className="button">Login</button>
          <button className="button">Log Out</button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;