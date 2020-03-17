import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    logo: { type: String },
    title: { type: String, required: true },
    host: { type: String, required: true },
    eventDate: { type: String, required: true },
    eventTime: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    link: { type: String },
    cost: { type: Number, required: true },
    creator: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default Event;