import { Router } from "express";
import { noticiaRouter } from "../controllers/NoticiaController";

const routes = Router();
routes.use("/noticia_g1", noticiaRouter);
export default routes;
