import express from "express";
import {
  addPodcaster,
  listPodcaster,
  removePodcaster,
} from "../controllers/podcasterController.js";
import upload from "../middleware/multer.js";

const podcasterRouter = express.Router();
podcasterRouter.post("/add", upload.single("image"), addPodcaster);
podcasterRouter.get("/list", listPodcaster);
podcasterRouter.post("/remove", removePodcaster);

export default podcasterRouter;
