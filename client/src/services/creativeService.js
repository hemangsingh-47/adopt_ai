import API from '../utils/axios.js';

const getCreatives = async () => {
  const response = await API.get('/upload');
  return response.data;
};

const uploadCreative = async (formData) => {
  const response = await API.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

const deleteCreative = async (id) => {
  const response = await API.delete(`/upload/${id}`);
  return response.data;
};

const creativeService = { getCreatives, uploadCreative, deleteCreative };
export default creativeService;
