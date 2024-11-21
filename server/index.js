import express from "express";
import "dotenv/config";
import {
  createThing,
  deleteThing,
  getThing,
  getThings,
  updateThing,
} from "./thing.controller.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/api/things", getThings);
app.get("/api/things/:id", getThing);
app.post("/api/things", createThing);
app.patch("/api/things/:id", updateThing);
app.delete("/api/things/:id", deleteThing);

app.listen(port, () => {
  connectDB();
  console.log(`Listening on port ${port}`);
});
