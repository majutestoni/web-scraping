
import { AppDataSource } from "../../database/data-source";
import {  UpdateResult } from "typeorm";
import Noticia from "../entities/Noticia";
import INoticia from "../interfaces/INoticia";
const noticiaRepository = AppDataSource.getRepository(Noticia);

const getNoticias = (): Promise<INoticia[]> => {
  return noticiaRepository.find();
};

const postNoticia = (noticia: INoticia): Promise<INoticia> => {
  return noticiaRepository.save(noticia);
};

const getNoticiaById = (id: number): Promise<INoticia | undefined> => {
    return noticiaRepository.createQueryBuilder("noticia").where("noticia.id = :id", { id }).getOne();
};

export default { getNoticias, postNoticia, getNoticiaById };
