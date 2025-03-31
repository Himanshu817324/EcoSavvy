import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  IconButton,
  Rating,
  Snackbar,
  Alert,
  Skeleton
} from '@mui/material';
import {
  ShoppingCart,
  Favorite,
  FavoriteBorder,
  Visibility
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { getProductImage, checkImageExists } from '../utils/imageUtils';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      setImageLoading(true);
      const url = getProductImage(product.category, product.name);
      const exists = await checkImageExists(url);
      setImageUrl(exists ? url : getProductImage('Stationery', 'Recycled Paper Notebook')); // Fallback to a known working image
      setImageLoading(false);
    };
    loadImage();
  }, [product.category, product.name]);

  const handleAddToCart = () => {
    addToCart(product);
    setSnackbar({
      open: true,
      message: 'Added to cart!',
      severity: 'success'
    });
  };

  const handleBuyNow = () => {
    setSnackbar({
      open: true,
      message: 'Proceeding to checkout...',
      severity: 'info'
    });

    // In a real app, would add to cart and redirect
    setTimeout(() => {
      navigate('/cart');
    }, 1000);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
    setSnackbar({
      open: true,
      message: isInWishlist(product._id)
        ? 'Removed from wishlist'
        : 'Added to wishlist!',
      severity: isInWishlist(product._id) ? 'info' : 'success'
    });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxShadow: 2,
          borderRadius: 2,
          overflow: 'hidden',
          cursor: 'pointer',
          transition: '0.3s',
          '&:hover': {
            boxShadow: 6
          }
        }}
        onClick={handleCardClick}
      >
        {/* Wishlist button */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'rgba(255,255,255,0.7)',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.9)'
            },
            zIndex: 1
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleWishlistToggle();
          }}
        >
          {isInWishlist(product._id) ? (
            <Favorite color="error" />
          ) : (
            <FavoriteBorder color="action" />
          )}
        </IconButton>

        {/* Product image */}
        {imageLoading ? (
          <Skeleton variant="rectangular" height={200} />
        ) : (
          <CardMedia
            component="img"
            height="200"
            image={imageUrl}
            alt={product.name}
            sx={{ objectFit: 'contain', bgcolor: 'grey.100' }}
          />
        )}

        {/* Product info */}
        <CardContent sx={{ flexGrow: 1, pt: 2 }}>
          <Typography
            gutterBottom
            variant="h6"
            component={RouterLink}
            to={`/product/${product._id}`}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              fontWeight: 600,
              '&:hover': { color: 'primary.main' }
            }}
          >
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating
              value={product.rating}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({product.numReviews})
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: 40,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              mb: 1
            }}
          >
            {product.description}
          </Typography>

          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            ${product.price.toFixed(2)}
          </Typography>

          <Typography
            variant="body2"
            color={product.countInStock > 0 ? 'success.main' : 'error.main'}
          >
            {product.countInStock > 0
              ? `In Stock (${product.countInStock})`
              : 'Out of Stock'}
          </Typography>
        </CardContent>

        {/* Actions */}
        <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCart />}
            disabled={product.countInStock === 0}
            sx={{ flexGrow: 1, mr: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            Add to Cart
          </Button>

          <IconButton
            color="primary"
            sx={{ border: '1px solid', borderColor: 'primary.main' }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product._id}`);
            }}
          >
            <Visibility />
          </IconButton>
        </CardActions>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default ProductCard;