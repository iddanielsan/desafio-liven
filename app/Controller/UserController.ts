import * as express from 'express'
import { body, validationResult } from 'express-validator';
import UserService from '../Services/UserService';
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class UserController  {

  constructor(service: UserService){
  }

  get(req: express.Request, res: express.Response) {
    try {
      console.log(req)
      return res.send("Oi")
    } catch (err) {
      console.log(err)
    }
  }

  async post(req: express.Request, res: express.Response) {
    try {
      console.log(req.body)
      return res.send("Oi")
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