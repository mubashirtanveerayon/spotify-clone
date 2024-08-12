import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import PodcasterItem from "./PodcasterItem";

const DisplayPodcastList = () => {
  const { podcastersData } = useContext(PlayerContext);

  return (
    <>
      <div className=" mb-4">
        <div className="flex flex-wrap  overflow-auto ">
          {podcastersData.map((item, index) => (
            <PodcasterItem
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

export default DisplayPodcastList;
