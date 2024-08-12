import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistItem = ({ name, image, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/artist/${id}`)}
      className="min-w-[180px] max-w-[215px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] "
    >
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc} </p>
    </div>
  );
};

export default ArtistItem;
