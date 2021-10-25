import * as express from 'express'
import { body, validationResult } from 'express-validator';
import UserService from '../Services/UserService';
import {autoInjectable} from "tsyringe";

@autoInjectable()
export class UserController  {

  constructor(private service: UserService){
  }

  async auth(req: express.Request, res: express.Response){
    try {
      var token = await this.service.authUser(req.body)

      if(!token) {
        return res.status(400).json({
          success: false,
          error: 'login_failed_because_invalid_credentials'
        })
      }

      return res.status(200).json({
        success: true, 
        token: token
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'internal_server_error'
      })
    }
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
      
      return res.status(201).json(user)
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'internal_server_error'
      })
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