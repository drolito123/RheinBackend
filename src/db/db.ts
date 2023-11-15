import { AppDataSource } from "../config";
import { Remera } from "../models/producs";

export class Db {
    constructor(){}
    static getAll(){
        AppDataSource.getRepository(Remera).find();
    }
}
