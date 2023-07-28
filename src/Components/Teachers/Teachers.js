import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../Store/TeachersSlice/TeachersSlice";
import Loader from "../utilities/Loader/Loader";
import Error from "../utilities/Error/Error";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.teachers);
  const status = useSelector((state) => state.teachers.status);
  const error = useSelector((state) => state.teachers.error);
  const requestTeachers = async () => {
    dispatch(getTeachers());
  };

  useEffect(() => {
    !teachers[0] && requestTeachers();
  }, []);
  return (
    <div>
      {status && <Loader />}
      {error ? <Error error={error} /> : <div>Hogwarts staff</div>}
    </div>
  );
};
export default Teachers;
