import AbstractModel  from '../abstract/AbstractModel'

export default class Address extends AbstractModel {
    protected table = 'addresses'
    protected primaryKey = 'address_id'
}