import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";
import artistRouter from "./src/routes/artistRoute.js";
import podcastRouter from "./src/routes/podcastRoute.js";
import podcasterRouter from "./src/routes/podcasterRoute.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);
app.use("/api/artist", artistRouter);
app.use("/api/podcaster", podcasterRouter);
app.use("/api/podcast", podcastRouter);

app.get("/", (req, res) => res.send("API working"));
app.listen(port, () => console.log(`Server : ${port}`));
