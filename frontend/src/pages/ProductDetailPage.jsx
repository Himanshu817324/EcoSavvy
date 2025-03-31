import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Rating,
  Divider,
  TextField,
  Tabs,
  Tab,
  Paper,
  Breadcrumbs,
  Link,
  IconButton,
  Snackbar,
  Alert,
  Chip
} from '@mui/material';
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  NavigateBefore,
  NavigateNext,
  ShoppingBag
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Product database
const productsData = [
  {
    _id: '1',
    name: 'Recycled Plastic',
    description: 'High-quality recycled plastic material, perfect for manufacturing. Sustainable alternative to virgin plastic with reduced carbon footprint. This recycled plastic is sourced from post-consumer waste and processed to meet industry standards for durability and performance. Suitable for a wide range of applications including packaging, construction, and consumer goods manufacturing.',
    category: 'plastic',
    countInStock: 100,
    price: 150,
    images: [
      'https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1611284446314-4ab46b517210?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1571727153934-b9e0a6db0ff3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    rating: 4.5,
    numReviews: 12,
    features: [
      'Made from 100% recycled post-consumer waste',
      'Reduces carbon footprint by 70% compared to virgin plastic',
      'Fully recyclable after use',
      'Available in pellet form for easy manufacturing',
      'Meets industry standards for durability and performance'
    ],
    specifications: {
      'Material': 'Recycled HDPE/LDPE',
      'Density': '0.95-0.97 g/cm³',
      'Melt Flow Index': '2.0-2.5 g/10min',
      'Color': 'Natural (off-white)',
      'Certifications': 'ISO 9001, GRS (Global Recycled Standard)'
    }
  },
  {
    _id: '2',
    name: 'Scrap Metal',
    description: 'Assorted scrap metal, good for recycling and repurposing. Includes aluminum, copper, and steel scraps suitable for various manufacturing needs. Our mixed metal collection is carefully sorted to ensure maximum value and utility for your projects. Perfect for metal artists, recyclers, and manufacturers looking for cost-effective raw materials.',
    category: 'metal',
    countInStock: 200,
    price: 300,
    images: [
      'https://images.unsplash.com/photo-1605001335668-582f819b6dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1618078204908-faa394b9476d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1575526036583-33427d926fb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    rating: 4.0,
    numReviews: 8,
    features: [
      'Sorted by metal type for easy use',
      'Contains aluminum, steel, and copper',
      'Cleaned and pre-processed',
      'Ideal for metal art and manufacturing',
      'Sourced from industrial and commercial waste streams'
    ],
    specifications: {
      'Composition': '60% Steel, 30% Aluminum, 10% Copper',
      'Size Range': '5-30cm pieces',
      'Cleanliness': 'Industrial grade (pre-cleaned)',
      'Weight': 'Sold by kg',
      'Source': 'Post-industrial waste'
    }
  },
  {
    _id: '3',
    name: 'Waste Paper',
    description: 'Clean waste paper ready for recycling into new paper products. Pre-sorted and bundled for immediate processing. Our waste paper is collected from office environments and contains minimal contaminants. Perfect for recycling facilities and paper mills looking for reliable sources of recycled fiber for production of new paper goods.',
    category: 'paper',
    countInStock: 50,
    price: 80,
    images: [
      'https://images.unsplash.com/photo-1614777735430-7214d6756def?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1551909353-731e9fa40dea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1597328480570-8b1df7a1cfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    rating: 3.5,
    numReviews: 6,
    features: [
      'Pre-sorted white office paper',
      'Low ink contamination',
      'Bundled in 10kg bales',
      'Free from plastic and metal contaminants',
      'Sustainable source for new paper production'
    ],
    specifications: {
      'Type': 'White office paper',
      'Brightness': '85-90%',
      'Moisture Content': '<10%',
      'Contaminant Level': '<2%',
      'Bale Size': '10kg standard'
    }
  },
  {
    _id: '4',
    name: 'Recycled Glass',
    description: 'Crushed recycled glass ready for remanufacturing. Available in various colors and grades for different applications. This cullet is ideal for glass manufacturing, construction applications, and decorative uses. Our processing ensures a clean product free from contaminants and sorted by color for maximum utility.',
    category: 'glass',
    countInStock: 75,
    price: 120,
    images: [
      'https://images.unsplash.com/photo-1550411294-56f7d0c7fbe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1618291221243-a4ec3995661a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1618291221119-7f446ae10606?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    rating: 4.2,
    numReviews: 10,
    features: [
      'Color-sorted glass cullet',
      'Multiple size grades available',
      'Free from ceramics and heat-resistant glass',
      'Ideal for new glass manufacturing',
      'Also suitable for construction aggregates'
    ],
    specifications: {
      'Colors Available': 'Clear, Green, Amber, Mixed',
      'Size Grades': 'Fine (0-4mm), Medium (4-10mm), Coarse (10-25mm)',
      'Purity': '>99% glass content',
      'Source': 'Post-consumer container glass',
      'Processing': 'Crushed, washed, and sorted'
    }
  },
  {
    _id: '5',
    name: 'Electronic Waste',
    description: 'Sorted electronic components for recycling. Contains valuable rare metals and materials for reuse in manufacturing. Our E-waste collection is carefully sorted to maximize recovery of precious metals and minimize environmental impact. Suitable for specialized recycling facilities and manufacturers looking to recover valuable components.',
    category: 'electronics',
    countInStock: 30,
    price: 200,
    images: [
      'https://images.unsplash.com/photo-1550411294-25da0da3c37d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1585213761810-0b4bded541a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    rating: 4.7,
    numReviews: 14,
    features: [
      'Pre-sorted by component type',
      'Contains PCBs, connectors, and processors',
      'Rich in copper, gold, and rare earth elements',
      'Tested for data security (all storage wiped)',
      'Environmentally responsible disposal option'
    ],
    specifications: {
      'Types': 'PCBs, CPUs, connectors, power supplies',
      'Age Range': '1-10 years old components',
      'Average Gold Content': '200-300g per ton',
      'Rare Earth Content': 'Medium to high',
      'Hazardous Material Handling': 'Pre-processed for safety'
    }
  }
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State
  const [product, setProduct] = useState(null);
  const [inWishlist, setInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  // Fetch product data from hardcoded database
  useEffect(() => {
    const foundProduct = productsData.find(p => p._id === id);

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.countInStock || 0)) {
      setQuantity(value);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    setNotification({
      open: true,
      message: 'Product added to cart successfully!',
      severity: 'success'
    });
  };

  // Handle buy now
  const handleBuyNow = () => {
    setNotification({
      open: true,
      message: 'Proceeding to checkout!',
      severity: 'info'
    });
  };

  // Handle wishlist toggle
  const handleWishlistToggle = () => {
    setInWishlist(!inWishlist);
    setNotification({
      open: true,
      message: inWishlist ? 'Product removed from wishlist!' : 'Product added to wishlist!',
      severity: 'success'
    });
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Handle image navigation
  const handlePrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? (product?.images.length || 1) - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImage((prev) => (prev === (product?.images.length || 1) - 1 ? 0 : prev + 1));
  };

  // Handle notification close
  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  // Error state
  if (!product) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography color="error" variant="h6" sx={{ textAlign: 'center', my: 4 }}>
          Product not found
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={() => navigate('/products')}
            sx={{
              backgroundColor: '#2e7d32',
              '&:hover': { backgroundColor: '#1b5e20' }
            }}
          >
            Go to Products
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          Home
        </Link>
        <Link underline="hover" color="inherit" onClick={() => navigate('/products')} sx={{ cursor: 'pointer' }}>
          Products
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'grey.100',
                  position: 'relative'
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                  src={product.images[activeImage]}
                  alt={product.name}
                />

                {/* Image navigation buttons */}
                {product.images.length > 1 && (
                  <>
                    <IconButton
                      sx={{
                        position: 'absolute',
                        left: 8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        bgcolor: 'rgba(255,255,255,0.8)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                      }}
                      onClick={handlePrevImage}
                    >
                      <NavigateBefore />
                    </IconButton>
                    <IconButton
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        bgcolor: 'rgba(255,255,255,0.8)',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                      }}
                      onClick={handleNextImage}
                    >
                      <NavigateNext />
                    </IconButton>
                  </>
                )}
              </Paper>
            </motion.div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
                {product.images.map((img, index) => (
                  <Box
                    key={index}
                    component="img"
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: 'cover',
                      borderRadius: 1,
                      border: index === activeImage ? '2px solid #2e7d32' : '2px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                    src={img}
                    alt={`${product.name} - view ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                {product.name}
              </Typography>
              <IconButton
                onClick={handleWishlistToggle}
                sx={{
                  bgcolor: 'rgba(233, 30, 99, 0.1)',
                  '&:hover': { bgcolor: 'rgba(233, 30, 99, 0.2)' }
                }}
              >
                {inWishlist ? (
                  <Favorite sx={{ color: '#e91e63' }} />
                ) : (
                  <FavoriteBorder sx={{ color: '#e91e63' }} />
                )}
              </IconButton>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                ({product.numReviews} reviews)
              </Typography>
            </Box>

            <Chip
              label={product.category}
              color="primary"
              sx={{ mb: 2, backgroundColor: '#2e7d32' }}
            />

            <Typography variant="h5" component="p" sx={{ mb: 2, color: '#2e7d32', fontWeight: 'bold' }}>
              ₹{product.price.toFixed(2)}/kg
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              {product.description}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Typography sx={{ mr: 2 }}>Quantity:</Typography>
              <TextField
                type="number"
                InputProps={{ inputProps: { min: 1, max: product.countInStock } }}
                value={quantity}
                onChange={handleQuantityChange}
                size="small"
                sx={{ width: 80 }}
              />
              <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
                {product.countInStock} kg available
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button
                variant="contained"
                startIcon={<AddShoppingCart />}
                onClick={handleAddToCart}
                fullWidth
                sx={{
                  py: 1.5,
                  backgroundColor: '#2e7d32',
                  '&:hover': { backgroundColor: '#1b5e20' }
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                startIcon={<ShoppingBag />}
                onClick={handleBuyNow}
                fullWidth
                sx={{
                  py: 1.5,
                  borderColor: '#2e7d32',
                  color: '#2e7d32',
                  '&:hover': {
                    borderColor: '#1b5e20',
                    backgroundColor: 'rgba(46, 125, 50, 0.04)'
                  }
                }}
              >
                Buy Now
              </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '.MuiTab-root.Mui-selected': { color: '#2e7d32' },
                '.MuiTabs-indicator': { backgroundColor: '#2e7d32' }
              }}
            >
              <Tab label="Features" />
              <Tab label="Specifications" />
            </Tabs>

            <Box sx={{ mt: 2, minHeight: 200 }}>
              {activeTab === 0 ? (
                <Box component="ul" sx={{ pl: 2 }}>
                  {product.features.map((feature, index) => (
                    <Typography component="li" key={index} sx={{ mb: 1 }}>
                      {feature}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Box sx={{ mt: 2 }}>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        borderBottom: index < Object.keys(product.specifications).length - 1 ? '1px solid #eee' : 'none',
                        py: 1
                      }}
                    >
                      <Typography sx={{ fontWeight: 'bold', minWidth: 150 }}>{key}:</Typography>
                      <Typography>{value}</Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductDetailPage; 