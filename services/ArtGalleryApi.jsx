import axios from "axios";
const BASE_URL = "https://api.harvardartmuseums.org";
const BASE_URL2 = "https://api.artic.edu/api/v1/artworks";
const ApiKey = "60f1a814-1e04-498c-90cb-1623d9e7afdd";

const FetchApi = async ()=>{
    const response = await axios.get(`${BASE_URL}/Image?apikey=${ApiKey}`);
    return response.data;
}

const FetchApi2 = async ()=>{
    const response = await axios.get(`${BASE_URL2}`);
    return response.data;
}


export {FetchApi, FetchApi2};