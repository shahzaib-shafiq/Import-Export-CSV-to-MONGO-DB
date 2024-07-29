import { Request, Response } from "express";

const importUser = async (req: Request, res: Response) => {
  try {
    res.status(200).send({ success: true, msg: "Running" });
  } catch (error) {
    res.status(400).send({ success: false, msg: "Error" });
  }
};

export default importUser;
