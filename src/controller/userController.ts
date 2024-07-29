import { Request, Response } from "express";
import csv from "csvtojson";
import User from "../models/User";
import { json2csv } from "json-2-csv";

const importUser = async (req: Request, res: Response) => {
  try {
    var userData = [];

    if (!req.file || !req.file.path) {
      return res.status(400).send({ success: false, msg: "No file uploaded" });
    }

    const jsonArray = await csv().fromFile(req.file.path);

    console.log(jsonArray);
    for (let x = 0; x < jsonArray.length; x++) {
      userData.push({
        name: jsonArray[x].Name,
        email: jsonArray[x].Email,
        phone: jsonArray[x].Phone,
      });
    }

    await User.insertMany(userData);

    res.status(200).send({ success: true, msg: "CSV Imported" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ success: false, msg: "Error processing file" });
  }
};

const exportUser = async (req: Request, res: Response) => {
  try {
    let users: Array<{
      id: string;
      name: string;
      email: string;
      phone: number;
    }> = [];
    const userData = await User.find({});

    userData.forEach((user) => {
      const { id, name, email, phone } = user;
      users.push({ id, name, email, phone });
    });

    // Define CSV fields
    const csvFields = ["id", "name", "email", "phone"];

    // Convert JSON to CSV
    const csvData = await json2csv(users, { keys: csvFields });

    // Send the CSV file in response
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=usersData.csv");
    res.status(200).send(csvData);
  } catch (error) {
    console.error("Error exporting users:", error); // Log the error for debugging
    res.status(400).send({ success: false, msg: "Error processing file" });
  }
};
export { importUser, exportUser };
