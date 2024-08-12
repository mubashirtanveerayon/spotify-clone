// Display podcast means display podcaster

import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import {
  //podcastersData, //Change podcastData to podcastersData
  assets,
  // podcastsData, //change podcastEpisode to podcastsData.
} from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayPodcast = ({ podcaster }) => {
  const { id } = useParams();
  const [podData, setPodData] = useState("");
  const { playWithId, podcastersData, podcastsData, songsData } =
    useContext(PlayerContext);

  useEffect(() => {
    podcastersData.map((item) => {
      if (item._id === id) {
        setPodData(item);
      }
    });
  }, []);

  return podData ? (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={podData.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Podcast</p>
          <h2 className="text-5xl font-bold mb-4 mb:text-7xl">
            {podData.name}{" "}
          </h2>
          <h4>{podData.desc}</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              alt=""
              className="inline-block w-5"
            />
            <b> Spotify</b>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7a7]">
        <p>
          <b className="mr-4"></b>Title
        </p>
        <p>Host</p>
      </div>
      <hr />
      {podcastsData.map((item, index) => {
        if (item.podcaster === podData.name) {
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

export default DisplayPodcast;
