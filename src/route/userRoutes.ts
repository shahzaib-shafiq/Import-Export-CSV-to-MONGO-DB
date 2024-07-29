import express from "express";
const router = express.Router();
import bodyParser from "body-parser";
import multer from "multer";
//const path = require("path");
import path from "path";
import { importUser, exportUser } from "../controller/userController";

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

// var upload = multer({ storage: storage });
const upload = multer({ dest: "uploads/" });
// Define your routes here

router.post("/importUser", upload.single("file"), importUser);
router.get("/exportUser", exportUser);

export default router;
