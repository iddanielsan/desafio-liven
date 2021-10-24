import AbstractRepository from '../abstract/AbstractRepository';
import UserRepository from '../Repositories/UserRepository';
import {container} from "tsyringe";
import AbstractModel from '../abstract/AbstractModel';
import User from '../models/User';

export default class AppProvider {
    constructor(){
        this.register()
    }

    register() {
        container.registerSingleton<AbstractRepository>("UserRepository", UserRepository)
        container.registerSingleton<AbstractModel>("User", User)
    }
}