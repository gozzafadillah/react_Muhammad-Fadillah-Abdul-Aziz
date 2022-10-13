import axios from "axios";

const config = {
  baseURL: "https://positive-shepherd-52.hasura.app/api/rest",
  headers: {
    "x-hasura-admin-secret":
      "I63UlKYtFYVHj31kP1nBAWWAchluynmW4h6Kt38Mjp0MWH770YcubWOeTIYyireD",
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
