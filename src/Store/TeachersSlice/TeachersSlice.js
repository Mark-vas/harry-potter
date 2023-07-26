import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacter = createAsyncThunk(
  "character/getCharacter",
  async (id, { dispatch, rejectWithValue }) => {
    const res = await axios
      .get(`https://hp-api.onrender.com/api/character/${id}`)
      .then((res) => res.data)
      .catch((error) => rejectWithValue(error.message));
    return res;
  }
);

const CharacterSlice = createSlice({
  name: "character",
  initialState: {
    character: "",
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacter.pending, (state) => {
        state.character = "";
        state.status = true;
      })
      .addCase(getCharacter.fulfilled, (state, action) => {
        state.status = false;
        state.character = action.payload[0];
      })
      .addCase(getCharacter.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      });
  },
});

export const {} = CharacterSlice.actions;
export default CharacterSlice.reducer;
