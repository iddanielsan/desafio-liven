export default abstract class AbstractModel {
    protected primaryKey: string = "id"
    protected table?: string;

    public getTableName(){
        return this.table
    }
}