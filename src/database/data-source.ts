import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateNoticia1686766033270 } from "./migrations/1686766033270-createNoticia"
import Noticia from "../app/entities/Noticia"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "noticia",
    synchronize: true,
    logging: false,
    entities: [Noticia],
    migrations: [CreateNoticia1686766033270],
    subscribers: [],
})
