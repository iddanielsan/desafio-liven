import AbstractRepository from '../abstract/AbstractRepository';
import bcrypt from 'bcryptjs'
import { inject, injectable } from 'tsyringe';
import jwt from 'jsonwebtoken'
import IPostUserRequest from '../Requests/IPostUserRequest';
import IAuthUserRequest from '../Requests/IAuthUserRequest';
import config from '../Config/Config';
@injectable()
export default class UserService {
    constructor(@inject('UserRepository') private repository: AbstractRepository) {
    }

    public async authUser(user: IAuthUserRequest){
        try {
            var find = await this.repository.findBy(['user_id', 'hash'], {
                email: user.email
            })
            
            if(!bcrypt.compareSync(user.password, find.hash)) {
                return false
            }

            return jwt.sign({ user_id: find.user_id, username: find.username }, (config.SECRET as string), {
                expiresIn: 3000
            });
        } catch (error) {
            return false
        }
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

    async createNewUser(data: IPostUserRequest){
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