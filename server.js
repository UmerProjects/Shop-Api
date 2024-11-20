import express from "express";
import mongoose from "mongoose";
import { MONGODB_URL, PORT } from "./config/config.js";
import Router from "./routes/index.js";


const server = express();

server.use(express.json())

Router(server);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGODB_URL);
  console.log("Mongo Connected");

}

server.listen(PORT, (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
})


