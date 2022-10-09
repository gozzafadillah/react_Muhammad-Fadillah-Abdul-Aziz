import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const { id, title, completed } = action.payload;
      state.data.push({ id, title, completed });
    },
    todoDeleted(state, action) {
      const id = action.payload;
      const filterData = state.data.filter((val) => val.id !== id);
      state.data = [...filterData];
    },
    todoChangeStat(state, action) {
      const id = action.payload;
      const indexData = state.data.findIndex((value) => value.id === id);
      const newTodoList = [...state.data];
      if (indexData >= 0) {
        newTodoList[indexData].completed = !newTodoList[indexData].completed;
      }
      state.data = [...newTodoList];
    },
  },
});

export const { todoAdded, todoDeleted, todoChangeStat } = todoSlice.actions;
export default todoSlice.reducer;
