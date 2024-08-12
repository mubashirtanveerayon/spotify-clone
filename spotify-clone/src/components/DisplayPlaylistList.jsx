import React, { useContext } from "react";
import AlbumItem from "./AlbumItem";
import PlaylistItem from "./PlaylistItem";
import { playlistData } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayPlaylistList = () => {
  const { albumsData } = useContext(PlayerContext);

  return (
    <>
      <div className="mb-4">
        <div className="flex flex-wrap overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item._id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="flex overflow-auto">
          {playlistData.map((item, index) => (
            <PlaylistItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayPlaylistList;
