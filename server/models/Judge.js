import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Judge = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    homeTown: { type: String, required: true },
    state: { type: String, required: true },
    pic: { type: String, required: true, default: 'https://image.freepik.com/free-photo/flag-scotland-illustration-scottish-flag-waving_2227-720.jpg' },
    creator: { type: String, required: true },
    email: { type: String, required: true, default: 'none' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default Judge;