const transformCampaignData = (rawData) => {
  return rawData.map((row, index) => {
    // Required columns: campaign_name, spend, clicks, impressions, ctr, conversions
    return {
      _id: `temp-${Date.now()}-${index}`,
      name: row.campaign_name || row.name || 'Unknown Campaign',
      spend: parseFloat(row.spend) || 0,
      clicks: parseInt(row.clicks) || 0,
      impressions: parseInt(row.impressions) || 0,
      ctr: row.ctr || '0%',
      conversions: parseInt(row.conversions) || 0,
      status: 'Imported',
      platform: row.platform || 'Google Ads',
    };
  });
};

const csvService = {
  transformCampaignData,
};

export default csvService;
