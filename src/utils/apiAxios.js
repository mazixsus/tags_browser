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
      console.log(error.response.data.error_message);
      throw new Error(
        error.response.data.error_message
      );
    }
    throw error;
  }
);

export default apiAxios;