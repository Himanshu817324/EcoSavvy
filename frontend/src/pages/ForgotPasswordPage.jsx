import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  Email as EmailIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ForgotPasswordPage = () => {
  // State
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!email) {
      setFormError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setFormError('');
    setFormSuccess('');

    try {
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation
      if (email === 'demo@example.com') {
        setFormSuccess('Password reset instructions have been sent to your email');
        setEmail('');
      } else {
        setFormError('No account found with this email address');
      }
    } catch (error) {
      setFormError('An unexpected error occurred. Please try again.');
      console.error('Password reset error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Reset Password
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
              Enter your email address and we'll send you instructions to reset your password
            </Typography>

            {formError && (
              <Alert severity="error" sx={{ width: '100%', mb: 3 }}>
                {formError}
              </Alert>
            )}

            {formSuccess && (
              <Alert severity="success" sx={{ width: '100%', mb: 3 }}>
                {formSuccess}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={20} /> : <EmailIcon />}
                sx={{ py: 1.5, mb: 2, fontWeight: 600 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Reset Instructions'}
              </Button>

              <Grid container justifyContent="center">
                <Grid item>
                  <Typography variant="body2" align="center">
                    Remember your password?{' '}
                    <Link to="/login" style={{ textDecoration: 'none', color: 'primary.main' }}>
                      Sign in
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ForgotPasswordPage; 