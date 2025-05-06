import axios from 'axios';

const BRAVE_API_KEY = process.env.REACT_APP_BRAVE_API_KEY;

export const fetchCompetitorServices = async (domain) => {
  const { data } = await axios.get('https://api.brave.com/v1/search', {
    params: {
      q: `site:${domain} ("$") OR ("per unit")`,
      region: 'FL-PalmBeach'
    },
    headers: {
      'X-Subscription-Token': BRAVE_API_KEY
    }
  });
  
  // Parse pricing data from search results
  return data.web.results.map(result => ({
    name: result.title.split('|')[0].trim(),
    price: parseFloat(result.description.match(/\$(\d+\.?\d*)/)?.[1] || '0')
  }));
};
