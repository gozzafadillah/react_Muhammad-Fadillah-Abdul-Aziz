import axiosInstance from "../config/axiosinstance";

const APITodo = {
  async getAllTodo() {
    try {
      const response = await axiosInstance.get("/todo");
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async deleteTodo(id) {
    try {
      const response = await axiosInstance.delete(`/todo/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async addTodo(data) {
    try {
      const response = await axiosInstance.post(`/todo`, data);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async changeStat(data) {
    try {
      const response = await axiosInstance.patch(`/todo/${data.id}`, data);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APITodo;
