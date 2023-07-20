import { configureStore } from "@reduxjs/toolkit";
import CharactersSlice from "./CharactersSlice/CharactersSlice";

const store = configureStore({
  reducer: { characters: CharactersSlice },
});

export default store;
