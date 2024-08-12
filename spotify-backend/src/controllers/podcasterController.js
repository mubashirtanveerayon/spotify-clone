import { v2 as cloudinary } from "cloudinary";

import podcasterModel from "../models/podcasterModel.js";

const addPodcaster = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColour = req.body.bgColour;
    const image = req.file;
    const imageUpload = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });
    const podcasterData = {
      name,
      desc,
      bgColour,
      image: imageUpload.secure_url,
    };

    const podcaster = podcasterModel(podcasterData);
    await podcaster.save();
    res.json({ success: true, message: "Podcaster Added" });
  } catch (error) {
    //console.log(error);
    res.json({ success: false });
  }
};

const listPodcaster = async (req, res) => {
  try {
    const allPodcasters = await podcasterModel.find({});
    res.json({ success: true, podcasters: allPodcasters });
  } catch (error) {
    res.json({ success: false });
  }
};

const removePodcaster = async (req, res) => {
  try {
    await podcasterModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Podcaster Deleted" });
  } catch (error) {
    res.json({ success: false });
  }
};

export { addPodcaster, listPodcaster, removePodcaster };
