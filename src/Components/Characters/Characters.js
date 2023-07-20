import React from "react";
import { useSelector } from "react-redux";
import { charactersSelector } from "../../Store/CharactersSlice/CharactersSelector";

const Characters = () => {
  const characters = useSelector(charactersSelector);
  console.log(characters);
  return (
    <>
      <p>Hello, World!</p>
    </>
  );
};

export default Characters;
