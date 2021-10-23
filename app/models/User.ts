import AbstractModel  from '../abstract/AbstractModel'

export default class User extends AbstractModel {
    protected table = 'users'
    protected primaryKey = 'user_id'
}