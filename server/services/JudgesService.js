import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import Judges from "../models/Judge"
import mongoose from "mongoose";

const _repository = mongoose.model("Judges", Judges);

class JudgesService {

  async getAll() {
    return await _repository.find({})
  }
  async create(data) {
    return await _repository.create(data)
  }
}

export const judgesService = new JudgesService();