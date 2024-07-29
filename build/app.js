"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./route/userRoutes"));
const app = (0, express_1.default)();
const port = 3000;
mongoose_1.default.connect("mongodb://127.0.0.1:27017/CSV");
app.use("/", userRoutes_1.default);
app.listen(port, () => {
    console.log(`listening on port typescript server${3000}`);
});
