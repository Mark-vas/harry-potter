import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacter } from "../../Store/CharacterSlice/CharacterSlice";
import { useParams } from "react-router-dom";
import Loader from "../utilities/Loader/Loader";
import Error from "../utilities/Error/Error";

const CharacterPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const chracterInf = useSelector((state) => state.character.character);
  const status = useSelector((state) => state.character.status);
  const error = useSelector((state) => state.character.error);

  const requestCharacter = async (id) => {
    dispatch(getCharacter(id));
  };
  useEffect(() => {
    requestCharacter(id);
  }, []);

  return (
    <div>
      {status && <Loader />}
      {error ? <Error error={error} /> : <div>{chracterInf.name}</div>}
    </div>
  );
};

export default CharacterPage;
