import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSpells = createAsyncThunk(
  "spells/getSpells",
  async (_, { dispatch, rejectWithValue }) => {
    const res = await axios
      .get(`https://hp-api.onrender.com/api/spells`)
      .then((res) => res.data)
      .catch((error) => rejectWithValue(error.message));
    return res;
  }
);

const SpellsSlice = createSlice({
  name: "spells",
  initialState: {
    spells: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpells.pending, (state) => {
        state.status = true;
      })
      .addCase(getSpells.fulfilled, (state, action) => {
        state.status = false;
        state.spells = action.payload;
      })
      .addCase(getSpells.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      });
  },
});

export default SpellsSlice.reducer;
