/**
 * Controller for health-check endpoints
 */

// @desc    Check API health
// @route   GET /api/health
// @access  Public
const checkHealth = (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
};

export { checkHealth }; 