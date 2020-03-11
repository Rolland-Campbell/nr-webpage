import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    title: { type: String, required: true },
    eventDate: { type: String, required: true },
    eventTime: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    link: { type: String },
    creator: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default Event;