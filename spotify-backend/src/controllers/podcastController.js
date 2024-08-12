import { v2 as cloudinary } from "cloudinary";
import podcastModel from "../models/podcastModels.js";

const addPodcast = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const podcaster = req.body.podcaster;
    const audio = req.files.audio[0];
    const image = req.files.image[0];
    const audioUpload = await cloudinary.uploader.upload(audio.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;
    const podcastData = {
      name,
      desc,
      podcaster,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration: duration,
    };
    const podcast = podcastModel(podcastData);
    await podcast.save();
    res.json({ success: true, message: "Podcast Added" });
  } catch (error) {
    res.json({ success: false });
  }
};

const listPodcast = async (req, res) => {
  try {
    const allPodcasts = await podcastModel.find({});
    res.json({ success: true, podcasts: allPodcasts });
  } catch (error) {
    exports.json({ success: false });
  }
};

const removePodcast = async (req, res) => {
  try {
    await podcastModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Podcast Removed" });
  } catch (error) {
    res.json({ success: false });
  }
};

export { addPodcast, listPodcast, removePodcast };
