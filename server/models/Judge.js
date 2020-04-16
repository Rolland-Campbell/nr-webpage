import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Judge = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    homeTown: { type: String, required: true },
    pic: { type: String, required: true },
    creator: { type: String, required: true },
    email: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default Judge;