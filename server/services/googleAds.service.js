import Integration from '../models/Integration.js';

/**
 * Fetch campaign metrics from Google Ads
 * @param {string} userId 
 */
export const fetchGoogleMetrics = async (userId) => {
  try {
    const integration = await Integration.findOne({ user: userId, provider: 'google', status: 'active' });
    
    if (!integration) {
      // Return empty array instead of mock data if there's no valid integration
      return [];
    }

    // In a real implementation, we would use googleAdsClient with integration.accessToken
    // Since we don't have real credentials, we return the mock data ONLY if the user is connected
    const mockData = [
      {
        platform: 'Google',
        campaignName: 'Search - Brand Keywords',
        spend: 450.25,
        clicks: 320,
        impressions: 5400,
        ctr: 5.92,
        status: 'Enabled'
      },
      {
        platform: 'Google',
        campaignName: 'Display - Remarketing',
        spend: 120.50,
        clicks: 85,
        impressions: 12000,
        ctr: 0.71,
        status: 'Enabled'
      }
    ];

    return mockData;
  } catch (error) {
    console.error('Error fetching Google Ads metrics:', error);
    throw error;
  }
};
