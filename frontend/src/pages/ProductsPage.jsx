import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Paper,
  CircularProgress
} from '@mui/material';
import ProductCard from '../components/ProductCard';

// Mock product data for demonstration
const mockProducts = [
  {
    _id: '1',
    name: 'Eco-Friendly Water Bottle',
    description: 'Reusable stainless steel water bottle',
    price: 25.99,
    category: 'Home & Kitchen',
    countInStock: 15,
    image: 'https://via.placeholder.com/500?text=Eco+Water+Bottle',
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
    image: 'https://via.placeholder.com/500?text=Bamboo+Toothbrush',
    rating: 4.2,
    numReviews: 8
  },
  {
    _id: '3',
    name: 'Recycled Paper Notebook',
    description: 'A5 size notebook made from 100% recycled paper',
    price: 8.99,
    category: 'Stationery',
    countInStock: 0,
    image: 'https://via.placeholder.com/500?text=Recycled+Notebook',
    rating: 4.0,
    numReviews: 6
  }
];

const categories = [
  'All',
  'Home & Kitchen',
  'Personal Care',
  'Stationery',
  'Electronics',
  'Fashion'
];

const ProductsPage = () => {
  const [products] = useState(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {filteredProducts.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No products found matching your criteria
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductsPage; 