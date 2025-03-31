import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { SentimentVeryDissatisfied, Home } from '@mui/icons-material';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 5, textAlign: 'center', borderRadius: 2 }}>
        <SentimentVeryDissatisfied sx={{ fontSize: 100, color: 'primary.main', mb: 2 }} />

        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          404
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Oops! Page Not Found
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          startIcon={<Home />}
          size="large"
          sx={{ px: 4, py: 1 }}
        >
          Back to Home
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFoundPage; 