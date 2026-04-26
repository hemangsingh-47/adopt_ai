import Notification from '../models/Notification.js';

// @desc    Get user notifications
// @route   GET /api/notifications
// @access  Private
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(50); // Get latest 50

    res.status(200).json({
      status: 'success',
      data: notifications
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Error fetching notifications'
    });
  }
};

// @desc    Mark a notification as read
// @route   PUT /api/notifications/:id/read
// @access  Private
export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({
        status: 'fail',
        message: 'Notification not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: notification
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Error updating notification'
    });
  }
};

// @desc    Mark all notifications as read
// @route   PUT /api/notifications/read-all
// @access  Private
export const markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      { user: req.user._id, read: false },
      { read: true }
    );

    res.status(200).json({
      status: 'success',
      message: 'All notifications marked as read'
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Error updating notifications'
    });
  }
};
