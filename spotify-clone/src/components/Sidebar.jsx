import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { useNavigate } from "react-router-dom";

const sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-[12%] py-2  flex-auto justify-between gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[99%] w-full rounded pr-2">
        <div
          onClick={() => navigate("/playlist")}
          className="p-2 flex items-center justify-between cursor-pointer hover:bg-[#ffffff26]  rounded"
        >
          <div className="flex items-center gap-1 ">
            <img className="w-8" src={assets.albums_icon} alt="" />
            <p className="font-bold">Albums</p>
            <img className="w-3 " src={assets.arrow_right} alt="" />
          </div>
        </div>
        <div
          onClick={() => navigate("/likedsongs")}
          className="p-2 flex items-center justify-between cursor-pointer hover:bg-[#ffffff26]  rounded"
        >
          <div className="flex items-center gap-1  ">
            <img className="w-8" src={assets.playlist_icon} alt="" />
            <p className="font-bold">Songs</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/Artists")}
          className="p-2 flex items-center justify-between cursor-pointer hover:bg-[#ffffff26]  rounded "
        >
          <div className="flex items-center gap-1">
            <img className="w-8" src={assets.artist_icon} alt="" />
            <p className="font-bold">Artists</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/Podcasts")}
          className="p-2 flex items-center justify-between cursor-pointer hover:bg-[#ffffff26]  rounded "
        >
          <div className="flex items-center gap-1">
            <img className="w-8" src={assets.podcast_icon} alt="" />
            <p className="font-bold">Podcasts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
