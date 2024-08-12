import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";
const ListPodcaster = () => {
  const [data, setData] = useState([]);

  const fetchPodcaster = async () => {
    try {
      const response = await axios.get(`${url}/api/podcaster/list`);

      if (response.data.success) {
        setData(response.data.podcasters);
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };

  const removePodcaster = async (id) => {
    try {
      const response = await axios.post(`${url}/api/podcaster/remove`, { id });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchPodcaster();
      }
    } catch (error) {
      toast.error("Error Occurred");
    }
  };

  useEffect(() => {
    fetchPodcaster();
  }, []);

  return (
    <div>
      <p>All Podcasters List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_1.8fr_1.2fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Background Colour</b>
          <b>Action</b>
        </div>

        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
            >
              <img className="w-12" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColour} />
              <p
                onClick={() => removePodcaster(item._id)}
                className="cursor-pointer text-base bg-gray-200 text-black py-2 px-10  "
              >
                DELETE
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPodcaster;
