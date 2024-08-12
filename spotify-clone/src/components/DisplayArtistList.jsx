import React, { useContext } from "react";
//import { artistsData } from "../assets/frontend-assets/assets";
import ArtistItem from "./ArtistItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayArtistList = () => {
  const { artistsData } = useContext(PlayerContext);

  return (
    <>
      <div className="mb-4">
        <div className="flex flex-wrap overflow-auto">
          {artistsData.map((item, index) => (
            <ArtistItem
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

export default DisplayArtistList;
