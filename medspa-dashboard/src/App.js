import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ComparisonGrid from './components/ComparisonGrid';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Pure Skin Competitive Dashboard
        </Typography>
        <ComparisonGrid />
      </Box>
    </Container>
  );
}

export default App;
