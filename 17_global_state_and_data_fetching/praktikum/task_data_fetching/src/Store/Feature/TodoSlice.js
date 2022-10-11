import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITodo from "../../apis/todo.api";

const initialState = {
  data: [],
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const fetchTodo = createAsyncThunk("get/todo", async () => {
  try {
    const res = await APITodo.getAllTodo();
    return res.data.todo;
  } catch (err) {
    console.log(err.message);
  }
});

export const removeTodo = createAsyncThunk("delete/todo", async (id) => {
  try {
    const res = await APITodo.deleteTodo(id);
    return res.data.todo;
  } catch (err) {
    console.log(err.message);
  }
});

export const addTodo = createAsyncThunk("add/todo", async (data) => {
  try {
    const res = await APITodo.addTodo(data);
    return res.data.insert_todo.returning;
  } catch (err) {
    console.log(err.message);
  }
});

export const updateStatTodo = createAsyncThunk(
  "updateStat/todo",
  async (data) => {
    try {
      const res = await APITodo.changeStat(data);
      return res.data.todo;
    } catch (err) {
      console.log(err.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data.unshift(action.payload[0]);
        state.status = !state.status;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      })
      .addCase(updateStatTodo.fulfilled, (state, action) => {
        const id = action.meta.arg.id;
        const indexData = state.data.findIndex((value) => value.id === id);
        const newTodoList = [...state.data];
        if (indexData >= 0) {
          newTodoList[indexData].completed = !newTodoList[indexData].completed;
        }
        state.data = [...newTodoList];
        state.status = !state.status;
      })
      .addCase(updateStatTodo.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.data = state.data.filter((val) => val.id !== action.meta.arg);
        state.status = !state.status;
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      });
  },
});
export const { todoChangeStat } = todoSlice.actions;
export default todoSlice.reducer;
