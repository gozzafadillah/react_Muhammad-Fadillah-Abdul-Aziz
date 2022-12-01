import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiUsers from "../../apis/Users.todo";

const initialState = {
  data: [],
  status: false,
  fecthStatus: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("get/users", async () => {
  try {
    const res = await ApiUsers.getAllUser();
    return res.data.team_users;
  } catch (err) {
    console.log(err.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.fecthStatus = "success";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.fecthStatus = "failed";
        state.err = action.error.message;
      });
  },
});

export default userSlice.reducer;
