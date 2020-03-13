import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TextGroup = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, maxlength: 10, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default TextGroup;