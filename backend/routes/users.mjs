import express from 'express';

const router = express.Router();

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
router.get('/profile', (req, res) => {
  res.json({
    _id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    isAdmin: false
  });
});

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'test@example.com' && password === 'password') {
    res.json({
      _id: '1',
      name: 'Test User',
      email: 'test@example.com',
      token: 'sample-token'
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

export default router; 