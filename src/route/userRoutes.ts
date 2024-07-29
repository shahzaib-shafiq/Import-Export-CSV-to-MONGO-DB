import express from "express";
const router = express.Router();
import bodyParser from "body-parser";
import multer from "multer";
//const path = require("path");
import path from "path";
import importUser from "../controller/userController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

// Define your routes here

router.post("/importUser", upload.single("file"), importUser);

export default router;
