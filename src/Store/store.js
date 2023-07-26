import { configureStore } from "@reduxjs/toolkit";
import CharactersSlice from "./CharactersSlice/CharactersSlice";
import CharacterSlice from "./CharacterSlice/CharacterSlice";

const store = configureStore({
  reducer: {
    characters: CharactersSlice,
    character: CharacterSlice,
  },
});

export default store;
