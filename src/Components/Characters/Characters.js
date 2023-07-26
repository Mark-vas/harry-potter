import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../Store/CharactersSlice/CharactersSlice";
import Character from "./Character/Character";
import InfiniteScroll from "react-infinite-scroll-component";

const Characters = () => {
  const [count, setcount] = useState(20);
  const [loadingCharacters, setloadingCharacters] = useState(true);
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);
  const error = useSelector((state) => state.characters.error);
  const status = useSelector((state) => state.characters.status);
  const requestCharacters = async () => {
    dispatch(getCharacters());
  };

  useEffect(() => {
    !characters[0] && requestCharacters();
  }, []);

  let cutСharactersArray = [];
  if (characters.length) {
    for (let i = 0; i <= count; i++) {
      cutСharactersArray.push(characters[i]);
    }
  }

  let charactersArray = [];
  if (cutСharactersArray) {
    charactersArray = cutСharactersArray.map((character) => {
      return <Character key={character.id} character={character} />;
    });
  }

  const downloadCharacters = () => {
    if (count == 400) {
      setcount(401);
      setloadingCharacters(false);
    } else setcount(count + 20);
  };

  return (
    <div>
      {status && <p style={{ fontSize: "100px" }}>Loading...</p>}
      {error && <p style={{ fontSize: "100px" }}>ERROR</p>}
      <InfiniteScroll
        next={downloadCharacters}
        hasMore={loadingCharacters}
        dataLength={charactersArray.length}
        // loader={<p>Loading...</p>}
        endMessage={<p style={{ fontSize: "100px" }}>No more data to load.</p>}
      >
        {charactersArray}
      </InfiniteScroll>
    </div>
  );
};

export default Characters;
