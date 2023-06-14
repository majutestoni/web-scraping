import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import express = require("express");
import cors = require("cors");
import routes from "./app/routes/routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes)

AppDataSource.initialize().then(async () => {
    console.log('database ok')
    app.listen(3030, () => {
        console.log('server start port on 3030')
    })
})
