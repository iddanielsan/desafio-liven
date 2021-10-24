import AbstractRepository from '../abstract/AbstractRepository';
import bcrypt from 'bcryptjs'

export default class UserService {
    private repository: AbstractRepository

    constructor(Repository: AbstractRepository) {
        this.repository = Repository
    }

    private makeHash(password: string): string {
        return bcrypt.hashSync(password, 10);
    }

    createNewUser(){
        try {
            
        } catch (error) {
            
        }
    }
}