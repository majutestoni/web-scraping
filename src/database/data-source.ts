import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateNoticia1686766033270 } from "./migrations/1686766033270-createNoticia"
import Noticia from "../app/entities/Noticia"
require('dotenv/config');

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Noticia],
    migrations: [CreateNoticia1686766033270],
    subscribers: [],
})
