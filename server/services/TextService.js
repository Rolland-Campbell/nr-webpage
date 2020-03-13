import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import TextGroup from "../models/TextGroup"
import mongoose from "mongoose";

const _repository = mongoose.model("TextGroup", TextGroup);

class TextService {

  async getAll() {
    return await _repository.find({})
  }

  async create(data) {
    return await _repository.create(data)
  }

  async edit(id, data) {
    return await _repository.findByIdAndUpdate(id, data)
  }

  async delete(id) {
    return await _repository.findByIdAndRemove(id)
  }
}

export const textService = new TextService();