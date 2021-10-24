import AbstractRepository from '../abstract/AbstractRepository';
import bcrypt from 'bcryptjs'
import { inject, injectable } from 'tsyringe';
import IUser from '../Interfaces/IUser';

@injectable()
export default class UserService {
    constructor(@inject('UserRepository') private repository: AbstractRepository) {
    }

    private makeHash(password: string): string {
        return bcrypt.hashSync(password, 10);
    }

    async getAllUsers(){
        try {
            var users = await this.repository.all()
            return users
        } catch (error) {
            
        }
    }

    async createNewUser(data: IUser){
        try {
            var find = await this.repository.findBy(['user_id'], {
                email: data.email
            })
            
            if(find) {
                throw new Error("User already registered")
            }

            var user = await this.repository.create({
                username: data.username,
                email: data.email,
                hash: this.makeHash(data.password)
            })

            return await this.repository.findBy(['user_id', 'username', 'email'], {
                user_id: user.lastID
            })
        } catch (error) {
            
        }
    }
}