import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import { Appbar } from './Components';

function App() {
  return (
    <Grid container direction="column">
      <Grid item><Appbar /></Grid>
      <Grid item>This is content</Grid>
    </Grid>
  );
}

export default App;
