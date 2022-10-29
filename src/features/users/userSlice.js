import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async() => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users")
  const data = await res.data
  return data

//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.data);
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
    //   console.log("pp", action.payload);
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
