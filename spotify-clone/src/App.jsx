import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Player from "./components/Player";
import Display from "./components/Display";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, songsData, podcastsData } =
    useContext(PlayerContext);

  return (
    <div className="h-screen bg-black ">
      {songsData.length !== 0 || podcastsData.length !== 0 ? (
        <>
          <Topbar />
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
      ) : null}

      <audio
        ref={audioRef}
        src={track ? track.file : ""}
        preload="auto"
      ></audio>
    </div>
  );
};

export default App;
