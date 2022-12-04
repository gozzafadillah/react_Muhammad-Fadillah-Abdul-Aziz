import axios from "axios";

const config = {
  baseURL: "https://becoming-dolphin-28.hasura.app/api/rest",
  headers: {
    "x-hasura-admin-secret":
      "5a8IZ6kGTaVB3y1uE2TmYSHn2uGFvCHZODGWTIgSFM402kmlI7thmEIqEFixFGgT",
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
