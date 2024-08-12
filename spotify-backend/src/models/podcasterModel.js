import mongoose from "mongoose";
const podcasterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  bgColour: { type: String, required: true },
  image: { type: String, required: true },
});

const podcasterModel =
  mongoose.models.podcaster || mongoose.model("podcaster", podcasterSchema);

export default podcasterModel;
