import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
// import {
//   artistsData,
//   podcastersData,
//   podcastsData,
// } from "../assets/frontend-assets/assets";
import DisplayArtist from "./DisplayArtist";
import DisplayPlaylist from "./DisplayPlaylist";
import DisplayPodcast from "./DisplayPodcast"; //Means displaying podcaster.
import DisplayPlaylistList from "./DisplayPlaylistList"; //Not Implemented yet
import DisplayLikedSongs from "./DisplayLikedSongs"; //Not Implemented yet
import DisplayArtistList from "./DisplayArtistList";
import { PlayerContext } from "../context/PlayerContext";
import DisplayPodcastList from "./DisplayPodcastList";

const Display = () => {
  const { albumsData, artistsData, podcastersData } = useContext(PlayerContext);
  // const { artistsData } = useContext(PlayerContext);
  // const { podcastersData } = useContext(PlayerContext);

  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  const bgColor =
    isAlbum && albumsData.length > 0
      ? albumsData.find((x) => x._id == albumId).bgColour
      : "#121212";

  const isArtist = location.pathname.includes("artist");
  const artistId = isArtist ? location.pathname.split("/").pop() : "";
  const artistBgColor = //"#121212";
    isArtist && artistsData.length > 0
      ? artistsData.find((x) => x._id == artistId).bgColour
      : "#121212";

  const isPodcaster = location.pathname.includes("podcaster");
  const podcasterId = isPodcaster ? location.pathname.split("/").pop() : "";
  const podcasterBgColor =
    isPodcaster && podcastersData.length > 0
      ? podcastersData.find((x) => x._id == podcasterId).bgColour
      : "#121212";

  // const isPlaylist=location.pathname.includes('playlist');
  // const playlistId=isArtist?location.pathname.slice(-1):"";
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else if (isArtist) {
      displayRef.current.style.background = `linear-gradient(${artistBgColor},#121212)`;
    } else if (isPodcaster) {
      displayRef.current.style.background = `linear-gradient(${podcasterBgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  // useEffect(() => {
  //   if (isPodcaster) {
  //     displayRef.current.style.background = `linear-gradient(${podcasterBgColor},#121212)`;
  //   } else {
  //     displayRef.current.style.background = `#121212`;
  //   }
  // });

  return (
    <div
      ref={displayRef}
      className="w-[100%] h-[97%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w[75%] "
    >
      {albumsData.length > 0 ||
      artistsData.length > 0 ||
      podcastersData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route
            path="/album/:id"
            element={
              <DisplayAlbum album={albumsData.find((x) => x._id == albumId)} />
            }
          />
          <Route
            path="/artist/:id"
            element={
              <DisplayArtist
                artist={artistsData.find((x) => x._id == artistId)}
              />
            }
          />
          <Route path="/playlist/:id" element={<DisplayPlaylist />} />
          <Route
            path="/podcaster/:id"
            element={
              <DisplayPodcast
                podcaster={podcastersData.find((x) => x._id == podcasterId)}
              />
            }
          />
          <Route path="/playlist" element={<DisplayPlaylistList />} />
          <Route path="/likedsongs" element={<DisplayLikedSongs />} />
          <Route path="/Artists" element={<DisplayArtistList />} />
          <Route path="/Podcasts" element={<DisplayPodcastList />} />
        </Routes>
      ) : null}
    </div>
  );
};

export default Display;
