import API from '../utils/axios.js';

const getSegments = async () => {
  const response = await API.get('/audiences');
  return response.data.data;
};

const createSegment = async (segmentData) => {
  const response = await API.post('/audiences', segmentData);
  return response.data.data;
};

const deleteSegment = async (id) => {
  const response = await API.delete(`/audiences/${id}`);
  return response.data;
};

const audienceService = {
  getSegments,
  createSegment,
  deleteSegment
};

export default audienceService;
