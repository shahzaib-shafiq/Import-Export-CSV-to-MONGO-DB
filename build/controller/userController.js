"use strict";
// import { Request, response, Response } from "express";
// import csv from "csvtojson";
// import User from "../models/User";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csvtojson_1 = __importDefault(require("csvtojson"));
const User_1 = __importDefault(require("../models/User"));
const importUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var userData = [];
        if (!req.file || !req.file.path) {
            return res.status(400).send({ success: false, msg: "No file uploaded" });
        }
        const jsonArray = yield (0, csvtojson_1.default)().fromFile(req.file.path);
        console.log(jsonArray);
        for (let x = 0; x < jsonArray.length; x++) {
            userData.push({
                name: jsonArray[x].Name,
                email: jsonArray[x].Email,
                mobile: jsonArray[x].Mobile,
            });
        }
        yield User_1.default.insertMany(userData);
        res.status(200).send({ success: true, msg: "CSV Imported" });
    }
    catch (error) {
        console.error(error);
        res.status(400).send({ success: false, msg: "Error processing file" });
    }
});
exports.default = importUser;
