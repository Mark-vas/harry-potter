import { configureStore } from "@reduxjs/toolkit";
import CharactersSlice from "./CharactersSlice/CharactersSlice";
import CharacterSlice from "./CharacterSlice/CharacterSlice";
import TeachersSlice from "./TeachersSlice/TeachersSlice";
import FacultyCharactersSlice from "./FacultyCharactersSlice/FacultyCharactersSlice";
import SpellsSlice from "./SpellsSlice/SpellsSlice";

const store = configureStore({
  reducer: {
    characters: CharactersSlice,
    character: CharacterSlice,
    teachers: TeachersSlice,
    facultyCharacters: FacultyCharactersSlice,
    spells: SpellsSlice,
  },
});

export default store;
