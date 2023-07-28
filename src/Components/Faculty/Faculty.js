import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../utilities/Loader/Loader";
import Error from "../utilities/Error/Error";
import { getFacultyCharacters } from "../../Store/FacultyCharactersSlice/FacultyCharactersSlice";
import { setSelectedFaculty } from "../../Store/FacultyCharactersSlice/FacultyCharactersSlice";

const arrFacultyFilter = [
  { name: "Gryffindor", id: "gryffindor" },
  { name: "Ravenclaw", id: "ravenclaw" },
  { name: "Hufflepuff", id: "hufflepuff" },
  { name: "Slytherin", id: "slytherin" },
];
const FacultyCharacters = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.facultyCharacters.status);
  const error = useSelector((state) => state.facultyCharacters.error);
  const facultyCharacters = useSelector(
    (state) => state.facultyCharacters.facultyCharacters
  );
  const selectedFaculty = useSelector(
    (state) => state.facultyCharacters.selectedFaculty
  );
  const requestFacultyCharacters = async (selectedFaculty) => {
    dispatch(getFacultyCharacters(selectedFaculty));
  };

  useEffect(() => {
    !facultyCharacters[0] && requestFacultyCharacters(selectedFaculty);
  }, [selectedFaculty]);
  // Массив персонажей по факультетам
  const facultyCharactersBlock = facultyCharacters.map((fC) => {});

  const btnFacultyFilter = arrFacultyFilter.map((f) => {
    return (
      <button
        style={{ backgroundColor: selectedFaculty == f.id && "red" }}
        onClick={(e) => {
          selectedFaculty !== e.currentTarget.id &&
            dispatch(setSelectedFaculty(e.currentTarget.id));
        }}
        key={f.id}
        id={f.id}
      >
        {f.name}
      </button>
    );
  });
  return (
    <div>
      {status && <Loader />}
      {error ? (
        <Error error={error} />
      ) : (
        <div>
          <div>{btnFacultyFilter}</div>
        </div>
      )}
    </div>
  );
};
export default FacultyCharacters;
