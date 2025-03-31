import React from 'react';
import { Box, Container, Stack, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              EcoSavvy
            </Typography>
            <Typography variant="body2">
              Your one-stop shop for eco-friendly products.
              We are committed to providing sustainable and
              environmentally conscious options for all your needs.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Home
              </Link>
              <Link href="/products" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Products
              </Link>
              <Link href="/cart" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Cart
              </Link>
              <Link href="/wishlist" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Wishlist
              </Link>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph>
              123 Green Street, Eco City
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@ecosavvy.com
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +1 (123) 456-7890
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} EcoSavvy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 