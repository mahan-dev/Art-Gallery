import axios from "axios";
const BASE_URL = "https://api.harvardartmuseums.org";
const BASE_URL2 = "https://api.artic.edu/api/v1/artworks";
const ApiKey = "60f1a814-1e04-498c-90cb-1623d9e7afdd";
const coingeckoApiKey = "CG-fr8QSRMv6GFu6g2VTGU7nMEM";
// const BASE_COIN = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&api_key=${coingeckoApiKey}`;
const BASE_COIN = `/api/v3/coins/markets?vs_currency=usd`;

const FetchApiCoin = async () => {
  const options = {
    method: 'GET',
    url: BASE_COIN,
    params: {
      vs_currency: 'usd'
    },
    headers: {
      'accept': 'application/json',
      'x-cg-pro-api-key': coingeckoApiKey // Correct header for the CoinGecko Pro API key
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const FetchApi = async ()=>{
    const response = await axios.get(`${BASE_URL}/Image?apikey=${ApiKey}`);
    return response.data;
}

const FetchApi2 = async ()=>{
    const response = await axios.get(`${BASE_URL2}`);
    return response.data;
}


export {FetchApi, FetchApi2, FetchApiCoin};