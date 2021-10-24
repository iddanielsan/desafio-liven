import * as express from 'express'
import { body, validationResult } from 'express-validator';
import UserService from '../Services/UserService';
import {autoInjectable} from "tsyringe";
import IUser from '../Interfaces/IUser';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@autoInjectable()
export class UserController  {

  constructor(private service: UserService){
  }

  get(req: express.Request, res: express.Response) {
    try {
      return res.send("Oi")
    } catch (err) {
      console.log(err)
    }
  }

  async post(req: express.Request, res: express.Response) {
    try {
      await body('username').notEmpty().isString().run(req)
      await body('email').notEmpty().isEmail().run(req)
      await body('password').notEmpty().isString().run(req)

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
      }

      var user = await this.service.createNewUser(req.body)
      
      return res.json(user)
    } catch (error) {
    }
  } 

  async update (req: express.Request, res: express.Response): Promise<void | any> {
    try {
    } catch (err) {
    }
  }

  async delete (req: express.Request, res: express.Response): Promise<void | any> {
    try {
    } catch (err) {
    }
  }
}