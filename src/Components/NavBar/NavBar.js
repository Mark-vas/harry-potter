import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <NavLink to={"/"}>All characters</NavLink>
      </div>
      <div>
        <NavLink to={"/students"}>Hogwarts students</NavLink>
      </div>
      <div>
        <NavLink to={"/teachers"}>Hogwarts staff</NavLink>
      </div>
      <div>
        <NavLink to={"/faculty"}>Characters in faculty</NavLink>
      </div>
      <div>
        <NavLink to={"/spells"}>Spells</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
