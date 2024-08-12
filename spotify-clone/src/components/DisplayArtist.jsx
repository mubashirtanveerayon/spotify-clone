import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayArtist = ({ artist }) => {
  const { id } = useParams();
  const [artistData, setArtistsData] = useState("");
  const { playWithId, artistsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    artistsData.map((item) => {
      if (item._id === id) {
        setArtistsData(item);
      }
    });
  }, []);

  return artistData ? (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={artistData.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
          <img src={assets.verified_icon} className="w-8" alt="" />
          <p>Verified Artist</p>
          <h2 className="text-5xl font-bold mb-4 mb:text-7xl">
            {artistData.name}{" "}
          </h2>
          <h4>{artistData.desc}</h4>
          <p className="mt-1">3,021,299 monthly listeners</p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7a7]">
        <p>Title</p>
        <p>Artist</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => {
        if (item.artist === artistData.name) {
          return (
            <div
              onClick={() => playWithId(item._id)}
              key={index}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7a7] hover:bg-[#ffffff2b] cursor-pointer "
            >
              <p className="text-white">
                <img className="inline w-10 mr-5" src={item.image} alt="" />
                {item.name}
              </p>
              <p className="text-[15px] ">{item.desc}</p>
              <p className="text-[15px] text-center">{item.duration}</p>
            </div>
          );
        }
      })}
    </>
  ) : null;
};

export default DisplayArtist;
