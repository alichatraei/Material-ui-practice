import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import { Appbar, CardsContainer } from './Components';

function App() {
  return (
    <Grid container direction="column">
      <Grid item xs={12}><Appbar /></Grid>
      <Grid item container>
        <Grid item md={2} />
        <Grid item sm={12} md={8}><CardsContainer /></Grid>
        <Grid item md={2} /></Grid>
    </Grid>
  );
}

export default App;
