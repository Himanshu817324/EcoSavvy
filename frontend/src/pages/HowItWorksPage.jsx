import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { getProductImage } from '../utils/imageUtils';

const HowItWorksPage = () => {
  const steps = [
    {
      label: 'Browse Products',
      description: 'Explore our curated collection of eco-friendly products across various categories.',
      image: getProductImage('Home & Kitchen', 'Eco-Friendly Water Bottle')
    },
    {
      label: 'Make a Purchase',
      description: 'Choose your sustainable products and complete your purchase securely.',
      image: getProductImage('Personal Care', 'Bamboo Toothbrush Set')
    },
    {
      label: 'Track Impact',
      description: 'Monitor your environmental impact through your personal dashboard.',
      image: getProductImage('Stationery', 'Recycled Paper Notebook')
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: 8
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  How It Works
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Making sustainable shopping simple and rewarding
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src={getProductImage('Home & Kitchen', 'Bamboo Cutting Board')}
                  alt="How it works"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'block',
                    mx: 'auto'
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}
        >
          Our Process
        </Typography>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} active={true}>
              <StepLabel>
                <Typography variant="h6">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Typography variant="body1" paragraph>
                        {step.description}
                      </Typography>
                      <Box
                        component="img"
                        src={step.image}
                        alt={step.label}
                        sx={{
                          width: '100%',
                          borderRadius: 2,
                          boxShadow: 2
                        }}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Typography variant="h5" component="h3" gutterBottom>
                            Benefits
                          </Typography>
                          <Typography variant="body1" paragraph>
                            • Reduce your environmental impact
                          </Typography>
                          <Typography variant="body1" paragraph>
                            • Support sustainable practices
                          </Typography>
                          <Typography variant="body1" paragraph>
                            • Track your eco-friendly journey
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                </Grid>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Container>

      {/* Impact Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}
          >
            Your Impact
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Carbon Footprint
                  </Typography>
                  <Typography variant="body1">
                    Track and reduce your carbon footprint with every purchase
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Waste Reduction
                  </Typography>
                  <Typography variant="body1">
                    Contribute to waste reduction through sustainable choices
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Community Impact
                  </Typography>
                  <Typography variant="body1">
                    Join a community of environmentally conscious consumers
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HowItWorksPage; 