import bodyParser from "body-parser";
import express from "express";

import multer from "multer";
//const path = require("path");
import path from "path";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

const userController = require("../controller/userController");

app.post("/importUser", upload.single("file"), userController.importUser);

module.exports = app;
