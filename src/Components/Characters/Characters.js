import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  charactersSelector,
  charactersErrorSelector,
  charactersStatusSelector,
} from "../../Store/CharactersSlice/CharactersSelector";
import { getCharacters } from "../../Store/CharactersSlice/CharactersSlice";

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);
  const error = useSelector(charactersErrorSelector);
  const status = useSelector(charactersStatusSelector);
  const requestCharacters = async () => {
    dispatch(getCharacters());
  };
  useEffect(() => {
    requestCharacters();
  }, []);
  debugger;
  return (
    <>
      {status === "loading" && <p style={{ fontSize: "100px" }}>Loading...</p>}
      {error && <p style={{ fontSize: "100px" }}>ERROR</p>}
      <p>Hello, World!</p>
    </>
  );
};

export default Characters;
