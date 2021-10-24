import * as express from 'express'
import { BaseController } from '../abstract/http/BaseController';

export class UserController  {
  get(req: express.Request, res: express.Response) {
    try {
      return res.send("Oi")
    } catch (err) {
      console.log(err)
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