import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { useNavigate } from "react-router-dom";
const Topbar = () => {

  const navigate =useNavigate();

  return (
    <div className="h[15%] bg-[#121212] flex justify-between items text-white px-2  rounded ">
      <div className="hidden lg:flex items-center gap-3">
        <div className="flex items-center gap-2 ">
          <div className=" px-2 rounded flex items-center">
            <img
              className="w-8 cursor-pointer "
              src={assets.stack_icon}
              alt=""
            />
            <p className="font-bold cursor-pointer px-2 rounded ">My Library</p>
          </div>
          <div className="w-[1vw] max-w-[8] "></div>
          <div onClick={()=>navigate('/')} className="hover:bg-[#ffffff26] px-2 rounded flex items-center">
            <img className="w-8 cursor-pointer" src={assets.home_icon} alt="" />
            <p className="font-bold cursor-pointer ">Home</p>
          </div>
          <div className="hover:bg-[#ffffff26] px-2 rounded flex items-center">
            <img
              className="w-8 cursor-pointer"
              src={assets.search_icon}
              alt=""
            />
            <p className="font-bold cursor-pointer ">search</p>
          </div>
        </div>
      </div>
      <div className="w-[60vw] max-w-[900px]"></div>
      <div className="hidden lg:flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4 ">
          <img
            src={assets.notification_icon}
            alt=""
            className="w-8 cursor-pointer hover:bg-[#ffffff26]  rounded flex items-center"
          />
          <img
            src={assets.private_icon}
            alt=""
            className="w-8 cursor-pointer hover:bg-[#ffffff26]  rounded flex items-center"
          />
          <img
            src={assets.friends_icon}
            alt=""
            className="w-8 cursor-pointer hover:bg-[#ffffff26]  rounded flex items-center"
          />
          <img
            src={assets.settings_icon}
            alt=""
            className="w-8 cursor-pointer hover:bg-[#ffffff26]  rounded flex items-center"
          />
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center  ">
            G
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
