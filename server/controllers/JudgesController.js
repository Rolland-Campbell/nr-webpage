import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { judgesService } from "../services/JudgesService";
import { Forbidden } from "../utils/Errors";

export class JudgesController extends BaseController {
  constructor() {
    super("api/judges");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await judgesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creator = req.userInfo.email;
      if (req.userInfo.app_metadata.role != "admin") {
        throw new Forbidden('You must be an Admin to create an event.')
      }
      let data = judgesService.create(req.body);
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
      let data = judgesService.edit(req.body.id, req.body);
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
      let data = judgesService.delete(req.params.id);
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
}