import express from 'express';

const router = express.Router();

// @desc    Get cart items
// @route   GET /api/cart
// @access  Private
router.get('/', (req, res) => {
  res.json({
    items: [
      {
        _id: '1',
        product: {
          _id: '1',
          title: 'Recycled Plastic',
          price: 150,
          image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        },
        quantity: 2,
        price: 300
      }
    ],
    totalPrice: 300
  });
});

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
router.post('/', (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId) {
    return res.status(400).json({ message: 'Product ID is required' });
  }

  res.status(201).json({
    items: [
      {
        _id: Date.now().toString(),
        product: {
          _id: productId,
          title: 'Sample Product',
          price: 100,
          image: 'https://example.com/image.jpg'
        },
        quantity: quantity || 1,
        price: (quantity || 1) * 100
      }
    ],
    totalPrice: (quantity || 1) * 100
  });
});

export default router; 