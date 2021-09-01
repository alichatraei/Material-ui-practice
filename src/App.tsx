import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>This is header</Grid>
      <Grid item>This is content</Grid>
    </Grid>
  );
}

export default App;
