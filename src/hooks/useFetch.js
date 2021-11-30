import axios from "axios";
import config from "../config";

const axiosClient = ({ baseURL = config.api.baseUrl, headers = {} }) =>
  axios.create({
    baseURL,
    headers,
  });
  
export const useFetch = (options = {}) => {
  const client = axiosClient(options);
  return client;
};
