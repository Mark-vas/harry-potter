import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://hp-api.onrender.com/api/characters/";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios
      .get(baseURL)
      .then((res) => res.data)
      .catch((error) => rejectWithValue(error.message));
    return res;
  }
);

const CharactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    oneCharacter: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.status = "loading";
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.characters = action.payload;
    },
    [getCharacters.rejected]: (state, action) => {
      state.status = "null";
      state.error = action.payload;
    },
  },
});
// {} Перечислить все редьюсеры
export const {} = CharactersSlice.actions;
export default CharactersSlice.reducer;
