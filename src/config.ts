import { DataSource } from 'typeorm';
import 'reflect-metadata'
import { Remera } from './models/producs';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 8080,
    username: "root",
    password: "1234",
    database: "",
    synchronize: true,
    logging: true,
    entities: [Remera],
    subscribers: [],
    migrations: [],
});

