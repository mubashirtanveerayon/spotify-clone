import React, { useContext } from "react";

import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayLikedSongs = () => {
  const { songsData } = useContext(PlayerContext);

  return (
    <>
      <div className=" mb-4">
        <div className="flex flex-wrap  overflow-auto ">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayLikedSongs;
