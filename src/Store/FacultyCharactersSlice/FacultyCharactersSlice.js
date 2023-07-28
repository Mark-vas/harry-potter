import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFacultyCharacters = createAsyncThunk(
  "facultyCharacters/getFacultyCharacters",
  async (faculty, { dispatch, rejectWithValue }) => {
    const res = await axios
      .get(`https://hp-api.onrender.com/api/characters/house/${faculty}`)
      .then((res) => res.data)
      .catch((error) => rejectWithValue(error.message));
    return res;
  }
);

const FacultyCharactersSlice = createSlice({
  name: "facultyCharacters",
  initialState: {
    facultyCharacters: [],
    selectedFaculty: "gryffindor",
    error: null,
    status: null,
  },
  reducers: {
    setSelectedFaculty: (state, action) => {
      state.selectedFaculty = action.payload;
      state.facultyCharacters = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFacultyCharacters.pending, (state) => {
        state.facultyCharacters = [];
        state.status = true;
      })
      .addCase(getFacultyCharacters.fulfilled, (state, action) => {
        state.status = false;
        state.facultyCharacters = action.payload;
      })
      .addCase(getFacultyCharacters.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedFaculty } = FacultyCharactersSlice.actions;
export default FacultyCharactersSlice.reducer;
