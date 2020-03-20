import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { registrationService } from "../services/RegistrationService";
import { Forbidden } from "../utils/Errors";

export class RegistrationController extends BaseController {
  constructor() {
    super("api/registration");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await registrationService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creator = req.userInfo.email;
      let data = registrationService.create(req.body);
      return res.status(201).send(data)
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      if (req.userInfo.app_metadata.role != "admin") {
        throw new Forbidden('You must be an Admin to edit a registration.')
      }
      let data = registrationService.edit(req.body.id, req.body);
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      if (req.userInfo.app_metadata.role != "admin") {
        throw new Forbidden('You must be an Admin to delete a registration.')
      }
      let data = registrationService.delete(req.params.id);
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
}
