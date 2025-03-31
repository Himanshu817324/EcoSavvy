import express from 'express';

const router = express.Router();

// @desc    Get user orders
// @route   GET /api/orders
// @access  Private
router.get('/', (req, res) => {
  res.json([
    {
      _id: '1',
      orderItems: [
        {
          _id: '1',
          product: {
            _id: '1',
            title: 'Recycled Plastic',
            price: 150
          },
          quantity: 2,
          price: 300
        }
      ],
      totalPrice: 300,
      isPaid: true,
      paidAt: new Date().toISOString(),
      isDelivered: false,
      createdAt: new Date().toISOString()
    }
  ]);
});

// @desc    Create order
// @route   POST /api/orders
// @access  Private
router.post('/', (req, res) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ message: 'No order items' });
  }

  res.status(201).json({
    _id: Date.now().toString(),
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice: 500,
    isPaid: false,
    isDelivered: false,
    createdAt: new Date().toISOString()
  });
});

export default router; 