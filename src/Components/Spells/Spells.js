import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpells } from "../../Store/SpellsSlice/SpellsSlice";
import Loader from "../utilities/Loader/Loader";
import Error from "../utilities/Error/Error";

const Spells = () => {
  const dispatch = useDispatch();
  const spells = useSelector((state) => state.spells.spells);
  const status = useSelector((state) => state.spells.status);
  const error = useSelector((state) => state.spells.error);
  const requestSpells = async () => {
    dispatch(getSpells());
  };

  useEffect(() => {
    !spells[0] && requestSpells();
  }, []);

  return (
    <div>
      {status && <Loader />}
      {error ? <Error error={error} /> : <div>Spells</div>}
    </div>
  );
};
export default Spells;
