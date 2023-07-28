import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCharacters,
  setSelectedBlood,
} from "../../Store/CharactersSlice/CharactersSlice";
import Character from "./Character/Character";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../utilities/Loader/Loader";
import Error from "../utilities/Error/Error";

const arrBloodFilter = [
  { name: "All", id: "all" },
  { name: "Half-blood", id: "half-blood" },
  { name: "Muggleborn", id: "muggleborn" },
  { name: "Pure-blood", id: "pure-blood" },
  { name: "Squib", id: "squib" },
];

const Characters = () => {
  const [count, setcount] = useState(20);
  const [loadingCharacters, setloadingCharacters] = useState(true);
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const error = useSelector((state) => state.characters.error);
  const status = useSelector((state) => state.characters.status);
  const selectedBlood = useSelector((state) => state.characters.selectedBlood);
  const requestCharacters = async () => {
    dispatch(getCharacters());
  };

  useEffect(() => {
    !characters[0] && requestCharacters();
  }, []);

  let cutСharactersArray = [];
  if (characters[0]) {
    for (let i = 0; i <= count; i++) {
      cutСharactersArray.push(characters[i]);
    }
  }

  let charactersArray = [];
  if (cutСharactersArray[0]) {
    charactersArray = cutСharactersArray.map((character) => {
      if (selectedBlood == "all" || character.ancestry == selectedBlood) {
        return <Character key={character.id} character={character} />;
      }
    });
  }

  const downloadCharacters = () => {
    if (count == 400) {
      setcount(401);
      setloadingCharacters(false);
    } else setcount(count + 20);
  };

  const btnBloodFilter = arrBloodFilter.map((button) => {
    return (
      <button
        style={{ backgroundColor: selectedBlood == button.id && "red" }}
        id={button.id}
        key={button.id}
        onClick={(e) =>
          selectedBlood !== e.currentTarget.id &&
          dispatch(setSelectedBlood(e.currentTarget.id))
        }
      >
        {button.name}
      </button>
    );
  });

  return (
    <div>
      {status && <Loader />}
      <div>{btnBloodFilter}</div>
      {error ? (
        <Error error={error} />
      ) : (
        <div>
          {selectedBlood == "all" ? (
            <InfiniteScroll
              next={downloadCharacters}
              hasMore={loadingCharacters}
              dataLength={charactersArray.length}
              // loader={<p>Loading...</p>}
              endMessage={
                <p style={{ fontSize: "100px" }}>No more data to load.</p>
              }
            >
              {charactersArray}
            </InfiniteScroll>
          ) : (
            <>{charactersArray}</>
          )}
        </div>
      )}
    </div>
  );
};

export default Characters;
