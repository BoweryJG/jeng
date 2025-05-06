import React from 'react';
import { Container, Typography, Box, AppBar, Toolbar, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import ComparisonGrid from './components/ComparisonGrid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f6fa',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: 1,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={2} color="primary">
        <Toolbar>
          <SpaIcon sx={{ mr: 2, fontSize: 32 }} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Pure Skin Competitive Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3, boxShadow: 3 }}>
          <ComparisonGrid />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
