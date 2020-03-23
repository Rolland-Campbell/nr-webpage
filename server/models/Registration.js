import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Registration = new Schema(
  {
    name: { type: String, required: true },
    eventTitle: { type: String, required: true },
    eventDate: { type: String, required: true },
    registeredClass: { type: String, required: true },
    shirtSize: { type: String, required: true },
    creator: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default Registration;