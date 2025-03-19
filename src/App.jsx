import React from 'react';
import { Button, Typography, Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Typography variant="h3" color="primary" gutterBottom>
        Welcome to Your MUI App
      </Typography>
      <Button variant="contained" color="primary">
        MUI Button
      </Button>
    </Container>
  );
}

export default App;
