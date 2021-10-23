import AbstractModel from './AbstractModel';
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export default abstract class AbstractRepository {
    private model?: AbstractModel;

    constructor(model: AbstractModel) {
        this.model = model
    }

    private async db(){
        return await open({
            filename: 'db.sqlite',
            driver: sqlite3.Database
        })
    }

    /**
     * Retorna todos os registros
     * @param columns 
     * @returns 
     */
    public async all(columns: string[] = ['*']) {
        var db = await this.db()
        var data = await db.all(`SELECT ${columns.join(',')} FROM ${this.model?.getTableName()}`)
        return data
    }
    
    /**
     * Cria um novo registro na tabela
     * @param data 
     * @returns 
     */
    public async create(data: object) {
        var db = await this.db()
        const columns = Object.keys(data)
        const values = Object.values(data)
        return await db.run(`INSERT INTO ${this.model?.getTableName()} (${columns.join(',')}) VALUES (${"?, ".repeat(columns.length).slice(0, -2)})`, values)
    }
}