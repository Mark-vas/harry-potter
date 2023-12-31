import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios
      .get(`https://hp-api.onrender.com/api/characters/staff`)
      .then((res) => res.data)
      .catch((error) => rejectWithValue(error.message));
    return res;
  }
);

const TeachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.status = true;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.status = false;
        state.teachers = action.payload;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      });
  },
});

// export const {} = TeachersSlice.actions;
export default TeachersSlice.reducer;
