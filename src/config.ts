import { DataSource } from 'typeorm';
import 'reflect-metadata'
import { Remera } from './models/producs';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "pensado",
    synchronize: true,
    logging: true,
    entities: [Remera],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then(async() => {
        console.log("DataBase Inicilizated")
        const remera1 = new Remera("remera1",199,"imagen1","yes")
        const remera2 = new Remera("remera2",249,"imagen2","yes")
        AppDataSource.manager.save([remera1,remera2])
    })
    .catch((error)=> {
        console.log(error)
    })
