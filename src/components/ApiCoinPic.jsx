const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
import axios from "axios";

export const getApi = async ()=>{
const response = await axios.get(BASE_URL);
const data = response.data;
return data;
// return response.data;

}

