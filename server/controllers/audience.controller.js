import Audience from '../models/Audience.js';

// @desc    Get user audiences
// @route   GET /api/audiences
// @access  Private
export const getAudiences = async (req, res) => {
  try {
    const audiences = await Audience.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({
      status: 'success',
      data: audiences
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Error fetching audiences'
    });
  }
};

// @desc    Create new audience
// @route   POST /api/audiences
// @access  Private
export const createAudience = async (req, res) => {
  try {
    const { name, platform, size, conversionRate } = req.body;

    if (!name || !platform || !size || !conversionRate) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide all required fields'
      });
    }

    const audience = await Audience.create({
      user: req.user._id,
      name,
      platform,
      size,
      conversionRate
    });

    res.status(201).json({
      status: 'success',
      data: audience
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Error creating audience'
    });
  }
};

// @desc    Delete audience
// @route   DELETE /api/audiences/:id
// @access  Private
export const deleteAudience = async (req, res) => {
  try {
    const audience = await Audience.findOneAndDelete({ 
      _id: req.params.id, 
      user: req.user._id 
    });

    if (!audience) {
      return res.status(404).json({
        status: 'fail',
        message: 'Audience not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Audience deleted'
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Error deleting audience'
    });
  }
};
