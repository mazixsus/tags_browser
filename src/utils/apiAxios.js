import axios from 'axios'


// const api_url = process.env.REACT_APP_API_URL;
const api_url = "https://api.stackexchange.com/2.3/";

const apiAxios = axios.create({
    baseURL: api_url,
});

apiAxios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      throw new Error(JSON.stringify(
        {message: error.message, data: error.response.data, code: error.response.status }
      ));
    }
    throw error;
  }
);

export default apiAxios;