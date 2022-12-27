import axios from "axios";

const API_URL = "https://d26vkzode5qsvt.cloudfront.net/";

const retrieveGreeting = () => {
  return axios.get(API_URL).then((response) => response.data);
};

export default {
  retrieveGreeting,
};
