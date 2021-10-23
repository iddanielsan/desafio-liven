import database from "../database"

export default abstract class Model {
    protected primaryKey: string = "id"
    protected table?: string;

    public getTableName(){
        return this.table
    }

    public all(columns: string[] = ['*'], callback: (itens: Array<[]>) => void) {
        if (!this.getTableName()) {
            throw Error('No primary key defined on model');
        }

        database.all(`SELECT ${columns.join(',')} FROM ${this.table}`, 
        (err: Error, rows) => {
            callback(rows)
        })
    }

    public create(data: object, callback: (item: object) => void) {
        const columns = Object.keys(data)
        const values = Object.values(data)

        database.run(`INSERT INTO ${this.table} (${columns.join(',')}) VALUES (${"?, ".repeat(columns.length).slice(0, -2)})`, values, function(_err) {
            callback(this)
        })
    }

    public static create(){}
}