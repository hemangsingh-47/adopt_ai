import API from '../utils/axios.js';

const getCampaigns = async () => {
  const response = await API.get('/campaigns');
  return response.data;
};

const createCampaign = async (campaignData) => {
  const response = await API.post('/campaigns', campaignData);
  return response.data;
};

const updateCampaign = async (id, campaignData) => {
  const response = await API.put(`/campaigns/${id}`, campaignData);
  return response.data;
};

const deleteCampaign = async (id) => {
  const response = await API.delete(`/campaigns/${id}`);
  return response.data;
};

const bulkCreateCampaigns = async (campaignsData) => {
  const response = await API.post('/campaigns/bulk', campaignsData);
  return response.data;
};

const campaignService = { getCampaigns, createCampaign, updateCampaign, deleteCampaign, bulkCreateCampaigns };
export default campaignService;
