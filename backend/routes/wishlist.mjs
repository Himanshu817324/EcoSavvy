import express from 'express';

const router = express.Router();

// @desc    Get wishlist items
// @route   GET /api/wishlist
// @access  Private
router.get('/', (req, res) => {
  res.json({
    products: [
      {
        _id: '1',
        name: 'Recycled Plastic',
        description: 'High-quality recycled plastic material, perfect for manufacturing.',
        category: 'plastic',
        countInStock: 100,
        price: 150,
        images: ['https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
        rating: 4.5,
        numReviews: 12
      },
      {
        _id: '3',
        name: 'Waste Paper',
        description: 'Clean waste paper ready for recycling into new paper products.',
        category: 'paper',
        countInStock: 50,
        price: 80,
        images: ['https://images.unsplash.com/photo-1614777735430-7214d6756def?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
        rating: 3.5,
        numReviews: 6
      }
    ]
  });
});

// @desc    Add item to wishlist
// @route   POST /api/wishlist
// @access  Private
router.post('/', (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({ message: 'Product ID is required' });
  }

  // Simulate adding the product to the wishlist
  // In a real application, you would add it to the database
  res.status(201).json({
    products: [
      {
        _id: '1',
        name: 'Recycled Plastic',
        description: 'High-quality recycled plastic material, perfect for manufacturing.',
        category: 'plastic',
        countInStock: 100,
        price: 150,
        images: ['https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
        rating: 4.5,
        numReviews: 12
      },
      {
        _id: '3',
        name: 'Waste Paper',
        description: 'Clean waste paper ready for recycling into new paper products.',
        category: 'paper',
        countInStock: 50,
        price: 80,
        images: ['https://images.unsplash.com/photo-1614777735430-7214d6756def?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
        rating: 3.5,
        numReviews: 6
      },
      {
        _id: productId,
        name: 'New Product',
        description: 'This is a newly added product.',
        category: 'electronics',
        countInStock: 30,
        price: 200,
        images: ['https://images.unsplash.com/photo-1550411294-25da0da3c37d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
        rating: 4,
        numReviews: 10
      }
    ]
  });
});

// @desc    Remove item from wishlist
// @route   DELETE /api/wishlist/:id
// @access  Private
router.delete('/:id', (req, res) => {
  const productId = req.params.id;

  // Simulate removing the product from the wishlist
  // In a real application, you would remove it from the database
  res.json({
    products: [
      {
        _id: '1',
        name: 'Recycled Plastic',
        description: 'High-quality recycled plastic material, perfect for manufacturing.',
        category: 'plastic',
        countInStock: 100,
        price: 150,
        images: ['https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
        rating: 4.5,
        numReviews: 12
      }
    ]
  });
});

// @desc    Clear wishlist
// @route   DELETE /api/wishlist
// @access  Private
router.delete('/', (req, res) => {
  // Simulate clearing the wishlist
  // In a real application, you would clear it from the database
  res.json({
    products: []
  });
});

export default router; 