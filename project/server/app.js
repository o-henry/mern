import express, { urlencoded } from "express";
import mongoose from "mongoose";

import { userController } from "./controller";

const app = express();

// use your dependencies here
app.use(express.json());

// use all controller(APIs) here (Routing)

// app.get("/", (req, res) => {
//   res.status(200).json({
//     status: "Server Run successfully"
//   });
// });

app.use("/", userController);

// Start Server
app.listen(8080, () => {
  console.log("Server is running on port 8080!");
  mongoose.connect("mongodb://localhost/test").then(() => {
    console.log(`Connected to mongoDB at port 27017`);
  });
});
