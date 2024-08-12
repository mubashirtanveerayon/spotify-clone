import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

const AddPodcast = () => {
  const [image, setImage] = useState(false);
  const [podcast, setPodcast] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [podcaster, setPodcaster] = useState("none");
  const [loading, setLoading] = useState(false);
  const [podcasterData, setPodcasterData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("audio", podcast);
      formData.append("podcaster", podcaster);

      const response = await axios.post(`${url}/api/podcast/add`, formData);

      if (response.data.success) {
        toast.success("Podcast Added");
        setName("");
        setDesc("");
        setPodcaster("none");
        setImage(false);
        setPodcast(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
    setLoading(false);
  };

  const loadPodcasterData = async () => {
    try {
      const response = await axios.get(`${url}/api/podcaster/list`);

      if (response.data.success) {
        setPodcasterData(response.data.podcasters);
      } else {
        toast.error("Unable to load podcasters data");
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };

  useEffect(() => {
    loadPodcasterData();
  }, []);

  return loading ? (
    <div className="grid place-item-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-600"
      action=""
    >
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Podcast</p>
          <input
            onChange={(e) => setPodcast(e.target.files[0])}
            type="file"
            id="podcast"
            accept="audio/*"
            hidden
          />
          <label htmlFor="podcast">
            <img
              src={podcast ? assets.upload_added : assets.upload_podcast}
              className="w-24 cursor-pointer"
              alt=""
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            accept="image/*"
            hidden
          />
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-24 cursor-pointer"
              alt=""
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Podcast Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
          placeholder="Type Here"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Podcast Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
          placeholder="Type Here"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Podcaster</p>
        <select
          onChange={(e) => setPodcaster(e.target.value)}
          defaultValue={podcaster}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]"
        >
          <option value="none">None</option>
          {podcasterData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="text-base bg-black text-white py-2.5 px-14 cursor-pointer"
      >
        ADD
      </button>
    </form>
  );
};

export default AddPodcast;
