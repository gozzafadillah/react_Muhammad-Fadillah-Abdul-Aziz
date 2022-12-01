import axiosInstance from "../config/AxiosInstance";

const ApiUsers = {
  async getAllUser() {
    try {
      const res = await axiosInstance.get("/users");
      return res;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default ApiUsers;
