import API from '../utils/axios.js';

const getNotifications = async () => {
  const response = await API.get('/notifications');
  return response.data.data;
};

const markAsRead = async (id) => {
  const response = await API.put(`/notifications/${id}/read`);
  return response.data.data;
};

const markAllAsRead = async () => {
  const response = await API.put('/notifications/read-all');
  return response.data;
};

const notificationService = {
  getNotifications,
  markAsRead,
  markAllAsRead
};

export default notificationService;
