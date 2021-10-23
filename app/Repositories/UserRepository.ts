import AbstractRepository from '../abstract/AbstractRepository';

export default class UserRepository extends AbstractRepository {
    async getAll(){
        var all = await this.all(['*'])
        return all
    }
}