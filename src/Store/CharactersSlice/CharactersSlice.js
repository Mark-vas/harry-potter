import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios
      .get("https://hp-api.onrender.com/api/characters/")
      .then((res) => res.data)
      .catch((error) => rejectWithValue(error.message));
    return res;
  }
);

const CharactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    error: null,
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.status = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.status = false;
        state.characters = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      });
  },
});
// {} Перечислить все редьюсеры
// export const {} = CharactersSlice.actions;
export default CharactersSlice.reducer;
