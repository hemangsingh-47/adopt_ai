import API from '../utils/axios.js';

// Register user
const register = async (userData) => {
  const response = await API.post('/auth/register', userData);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await API.post('/auth/login', userData);
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
