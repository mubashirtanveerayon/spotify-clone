import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import AddAlbum from "./pages/AddAlbum";
import AddSong from "./pages/AddSong";
import AddArtist from "./pages/AddArtist";
import AddPodcaster from "./pages/AddPodcaster";
import AddPodcast from "./pages/AddPodcast";
import ListAlbum from "./pages/ListAlbum";
import ListSong from "./pages/ListSong";
import ListArtist from "./pages/ListArtist";
import ListPodcaster from "./pages/ListPodcaster";
import ListPodcast from "./pages/ListPodcast";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export const url = "http://localhost:4000";

const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
        <Navbar />
        <div className="pt-8 pl-5 sm:pt-12 sm-pl-12">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/add-artist" element={<AddArtist />} />
            <Route path="/add-podcast" element={<AddPodcast />} />
            <Route path="/add-podcaster" element={<AddPodcaster />} />
            <Route path="/list-song" element={<ListSong />} />
            <Route path="/list-album" element={<ListAlbum />} />
            <Route path="/list-artist" element={<ListArtist />} />
            <Route path="/list-podcast" element={<ListPodcast />} />
            <Route path="/list-podcaster" element={<ListPodcaster />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
