import { createSlice } from "@reduxjs/toolkit";

const CharactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    oneCharacter: [],
    error: "",
  },
});
// Перечислить все редьюсеры
export const {} = CharactersSlice.actions;
export default CharactersSlice.reducer;
