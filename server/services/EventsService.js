import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import Events from "../models/Event"
import mongoose from "mongoose";

const _repository = mongoose.model("Events", Events);

class EventsService {

  async create(data) {
    return await _repository.create(data)
  }
}

export const eventsService = new EventsService();
