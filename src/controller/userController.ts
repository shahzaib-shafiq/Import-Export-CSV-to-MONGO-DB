// import { Request, response, Response } from "express";
// import csv from "csvtojson";
// import User from "../models/User";

// const importUser = async (req: Request, res: Response) => {
//   try {
//     csv()
//       .fromFile(req.file.path)
//       .then((response) => {
//         console.log(response);
//       });

//     res.status(200).send({ success: true, msg: "CSV Imported" });
//   } catch (error) {
//     res.status(400).send({ success: false, msg: "Error" });
//   }
// };

// export default importUser;

import { Request, Response } from "express";
import csv from "csvtojson";
import User from "../models/User";

const importUser = async (req: Request, res: Response) => {
  try {
    var userData = [];

    if (!req.file || !req.file.path) {
      return res.status(400).send({ success: false, msg: "No file uploaded" });
    }

    const jsonArray = await csv().fromFile(req.file.path);

    console.log(jsonArray);

    res.status(200).send({ success: true, msg: "CSV Imported" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ success: false, msg: "Error processing file" });
  }
};

export default importUser;
