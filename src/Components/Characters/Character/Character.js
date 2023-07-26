import React from "react";
import { NavLink } from "react-router-dom";

const Character = ({ character }) => {
  // const dispatch = useDispatch();
  // const click = (e) => {
  //   dispatch(getCharacter(e.currentTarget.id));
  // };
  return (
    <div id={character.id} style={{ marginTop: "30px" }}>
      <NavLink to={`/character/${character.id}`}>{character.name}</NavLink>
    </div>
  );
};

export default Character;
