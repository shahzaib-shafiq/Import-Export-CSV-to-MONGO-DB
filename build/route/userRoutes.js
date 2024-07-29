"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const body_parser_1 = __importDefault(require("body-parser"));
const multer_1 = __importDefault(require("multer"));
//const path = require("path");
const path_1 = __importDefault(require("path"));
const userController_1 = __importDefault(require("../controller/userController"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
var storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
// var upload = multer({ storage: storage });
const upload = (0, multer_1.default)({ dest: "uploads/" });
// Define your routes here
router.post("/importUser", upload.single("file"), userController_1.default);
//router.get("/exportUser", exportUser);
exports.default = router;
