// import mongoose from "mongoose";

// var userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
//   mobile: {
//     type: Number,
//   },
// });

// module.exports = mongoose.model("User", userSchema);

import mongoose, { Document, Model, Schema } from "mongoose";

// Define an interface for the User document
interface IUser extends Document {
  name: string;
  email: string;
  mobile: number;
}

// Define the schema for the User model
const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true, // Add validation if needed
  },
  email: {
    type: String,
    required: true, // Add validation if needed
    unique: true, // Ensure email is unique
  },
  mobile: {
    type: Number,
    required: true, // Add validation if needed
  },
});

// Create the User model using the schema and interface
const UserModel: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default UserModel;
