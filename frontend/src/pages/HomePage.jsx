import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { getProductImage } from '../utils/imageUtils';

// Hardcoded featured products
const featuredProducts = [
  {
    _id: '1',
    name: 'Eco-Friendly Water Bottle',
    description: 'Reusable stainless steel water bottle',
    price: 25.99,
    category: 'Home & Kitchen',
    countInStock: 15,
    rating: 4.5,
    numReviews: 12
  },
  {
    _id: '2',
    name: 'Bamboo Toothbrush Set',
    description: 'Pack of 4 biodegradable bamboo toothbrushes',
    price: 12.99,
    category: 'Personal Care',
    countInStock: 20,
    rating: 4.2,
    numReviews: 8
  },
  {
    _id: '3',
    name: 'Recycled Paper Notebook',
    description: 'A5 size notebook made from 100% recycled paper',
    price: 8.99,
    category: 'Stationery',
    countInStock: 30,
    rating: 4.0,
    numReviews: 6
  }
];

// Categories with images
const categories = [
  {
    name: 'Home & Kitchen',
    image: getProductImage('Home & Kitchen', 'Eco-Friendly Water Bottle'),
    description: 'Eco-friendly products for your home'
  },
  {
    name: 'Personal Care',
    image: getProductImage('Personal Care', 'Bamboo Toothbrush Set'),
    description: 'Natural and sustainable personal care items'
  },
  {
    name: 'Stationery',
    image: getProductImage('Stationery', 'Recycled Paper Notebook'),
    description: 'Sustainable office and school supplies'
  },
  {
    name: 'Fashion',
    image: getProductImage('Fashion', 'Organic Cotton T-Shirt'),
    description: 'Eco-conscious clothing and accessories'
  }
];

const HomePage = () => {
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
                  Shop Sustainably
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Discover eco-friendly products that make a difference
                </Typography>
                <Button
                  component={Link}
                  to="/products"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mr: 2 }}
                >
                  Shop Now
                </Button>
                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  color="inherit"
                  size="large"
                >
                  Learn More
                </Button>
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
                  src={getProductImage('Home & Kitchen', 'Eco-Friendly Water Bottle')}
                  alt="Eco-friendly products"
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

      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', mb: 4, fontWeight: 600 }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 4, fontWeight: 600 }}
          >
            Shop by Category
          </Typography>
          <Grid container spacing={4}>
            {categories.map((category) => (
              <Grid item key={category.name} xs={12} sm={6} md={3}>
                <Card
                  component={Link}
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={category.image}
                    alt={category.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At EcoSavvy, we're committed to making sustainable shopping accessible
                and enjoyable. We carefully curate our collection of eco-friendly
                products, ensuring they meet our high standards for quality and
                environmental impact.
              </Typography>
              <Button
                component={Link}
                to="/about"
                variant="contained"
                color="primary"
                size="large"
              >
                Learn More About Us
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src={getProductImage('Home & Kitchen', 'Bamboo Cutting Board')}
                alt="Sustainable products"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Impact Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}
          >
            Our Environmental Impact
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                  10,000+
                </Typography>
                <Typography variant="body1">Trees Planted</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                  5,000+
                </Typography>
                <Typography variant="body1">kg of Plastic Saved</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                  100%
                </Typography>
                <Typography variant="body1">Carbon Neutral</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 