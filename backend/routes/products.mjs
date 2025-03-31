import express from 'express';

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', (req, res) => {
  res.json([
    {
      _id: '1',
      name: 'Recycled Plastic',
      description: 'High-quality recycled plastic material, perfect for manufacturing. Sustainable alternative to virgin plastic with reduced carbon footprint.',
      category: 'plastic',
      countInStock: 100,
      price: 150,
      images: ['https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.5,
      numReviews: 12
    },
    {
      _id: '2',
      name: 'Scrap Metal',
      description: 'Assorted scrap metal, good for recycling and repurposing. Includes aluminum, copper, and steel scraps suitable for various manufacturing needs.',
      category: 'metal',
      countInStock: 200,
      price: 300,
      images: ['https://images.unsplash.com/photo-1605001335668-582f819b6dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.0,
      numReviews: 8
    },
    {
      _id: '3',
      name: 'Waste Paper',
      description: 'Clean waste paper ready for recycling into new paper products. Pre-sorted and bundled for immediate processing.',
      category: 'paper',
      countInStock: 50,
      price: 80,
      images: ['https://images.unsplash.com/photo-1614777735430-7214d6756def?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 3.5,
      numReviews: 6
    },
    {
      _id: '4',
      name: 'Recycled Glass',
      description: 'Crushed recycled glass ready for remanufacturing. Available in various colors and grades for different applications.',
      category: 'glass',
      countInStock: 75,
      price: 120,
      images: ['https://images.unsplash.com/photo-1550411294-56f7d0c7fbe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.2,
      numReviews: 10
    },
    {
      _id: '5',
      name: 'Electronic Waste',
      description: 'Sorted electronic components for recycling. Contains valuable rare metals and materials for reuse in manufacturing.',
      category: 'electronics',
      countInStock: 30,
      price: 200,
      images: ['https://images.unsplash.com/photo-1550411294-25da0da3c37d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.7,
      numReviews: 14
    }
  ]);
});

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
router.get('/featured', (req, res) => {
  const featuredProducts = [
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
      _id: '5',
      name: 'Electronic Waste',
      description: 'Sorted electronic components for recycling.',
      category: 'electronics',
      countInStock: 30,
      price: 200,
      images: ['https://images.unsplash.com/photo-1550411294-25da0da3c37d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.7,
      numReviews: 14
    }
  ];

  res.json(featuredProducts);
});

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', (req, res) => {
  const products = [
    {
      _id: '1',
      name: 'Recycled Plastic',
      description: 'High-quality recycled plastic material, perfect for manufacturing. Sustainable alternative to virgin plastic with reduced carbon footprint.',
      category: 'plastic',
      countInStock: 100,
      price: 150,
      images: ['https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.5,
      numReviews: 12
    },
    {
      _id: '2',
      name: 'Scrap Metal',
      description: 'Assorted scrap metal, good for recycling and repurposing. Includes aluminum, copper, and steel scraps suitable for various manufacturing needs.',
      category: 'metal',
      countInStock: 200,
      price: 300,
      images: ['https://images.unsplash.com/photo-1605001335668-582f819b6dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.0,
      numReviews: 8
    },
    {
      _id: '3',
      name: 'Waste Paper',
      description: 'Clean waste paper ready for recycling into new paper products. Pre-sorted and bundled for immediate processing.',
      category: 'paper',
      countInStock: 50,
      price: 80,
      images: ['https://images.unsplash.com/photo-1614777735430-7214d6756def?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 3.5,
      numReviews: 6
    },
    {
      _id: '4',
      name: 'Recycled Glass',
      description: 'Crushed recycled glass ready for remanufacturing. Available in various colors and grades for different applications.',
      category: 'glass',
      countInStock: 75,
      price: 120,
      images: ['https://images.unsplash.com/photo-1550411294-56f7d0c7fbe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.2,
      numReviews: 10
    },
    {
      _id: '5',
      name: 'Electronic Waste',
      description: 'Sorted electronic components for recycling. Contains valuable rare metals and materials for reuse in manufacturing.',
      category: 'electronics',
      countInStock: 30,
      price: 200,
      images: ['https://images.unsplash.com/photo-1550411294-25da0da3c37d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'],
      rating: 4.7,
      numReviews: 14
    }
  ];

  const product = products.find(p => p._id === req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

export default router; 