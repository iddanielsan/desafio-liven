import express from 'express';
import cors from 'cors'
import http from 'http'
import * as routes from './Routes/api'
import "reflect-metadata";
import {container} from "tsyringe";
import { MethodDeclaration, MethodSignature } from 'typescript';

export default class Boostrap {
  public app: express.Application;
  public router: express.Router
  public port: number;
 
  constructor(port: any) {
    this.app = express();
    this.port = port;
    this.router = express.Router()
 
    this.initializeMiddlewares();
  }

  public run(){
    this.app.use('/api', this.router);
    this.initializeControllers()
    this.listen()
  }
 
  private initializeMiddlewares() {
    this.app.use(cors({
        origin: ['http://localhost:3000']
    }))

    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true}))
  }
 
  private initializeControllers() {
    var instance = this
    routes.default.forEach(function(i) {
      const controller = container.resolve(i.controller);

      if(i.isResource) {
        http.METHODS.forEach(method => {
          if(typeof (controller as any)[method.toLowerCase()] == "function") {
            (instance.router as any)[method.toLowerCase()](i.route, (controller as any)[method.toLowerCase()])
          }
        })
      }
    })
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}