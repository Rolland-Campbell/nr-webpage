import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { textService } from "../services/TextService";
import { Forbidden } from "../utils/Errors";

export class TextController extends BaseController {
  constructor() {
    super("api/textGroup");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post("", this.create)
      .use(auth0Provider.getAuthorizedUserInfo)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await textService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = textService.create(req.body);
      return res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      if (req.userInfo.app_metadata.role != "admin") {
        throw new Forbidden('You must be an Admin to edit an event.')
      }
      let data = textService.edit(req.body.id, req.body);
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      if (req.userInfo.app_metadata.role != "admin") {
        throw new Forbidden('You must be an Admin to delete an event.')
      }
      let data = eventsService.delete(req.params.id);
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
}
