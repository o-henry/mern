import express from "express";

const userController = express.Router();

userController.get("/", (req, res) => {
  res.status(200).json({
    status: "user Controller API call successfully"
  });
});

export default userController;
