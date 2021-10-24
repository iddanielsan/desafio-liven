import { inject, injectable } from 'tsyringe';
import AbstractModel from '../abstract/AbstractModel';
import AbstractRepository from '../abstract/AbstractRepository';

@injectable()
export default class UserRepository extends AbstractRepository {
    constructor(@inject('User') protected model: AbstractModel){
        super(model)
    }
}