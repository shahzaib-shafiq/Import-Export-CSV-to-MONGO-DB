import { Request, Response } from "express";
import csv from "csvtojson";
import User from "../models/User";

const importUser = async (req: Request, res: Response) => {
  try {
    res.status(200).send({ success: true, msg: "CSV Imported" });
  } catch (error) {
    res.status(400).send({ success: false, msg: "Error" });
  }
};

export default importUser;
