import { Request, Response, Router } from "express";
import NoticiaRepository from "../repositories/NoticiaRepository";

import INoticia from "../interfaces/INoticia";

const puppeteer = require('puppeteer');
const noticiaRouter = Router();

noticiaRouter.get("/", async (_req: Request, res: Response): Promise<Response> => {
  try {
    const noticias = await NoticiaRepository.getNoticias();
    return res.status(200).json(noticias);
  } catch (error) {
    return res.status(401).json({ message: "Nenhuma noticia encontrada"});
  }
});

noticiaRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  const url = req.body.url;

  try {
    const noticia = await webScrapping(url)
    NoticiaRepository.postNoticia(noticia)
    return res.status(200).json(noticia);
  } catch (error) {
    console.error("Erro ao raspar os dados:", error);
    return res.status(500).json({ error: "Erro ao raspar os dados." });
  }
});

async function webScrapping(url: string): Promise<INoticia> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
  
    await page.waitForSelector(".content-head__title");
    await page.waitForSelector(".content-head__subtitle");
  
    const data: INoticia = await page.evaluate(() => {
      const title = document.querySelector(".content-head__title").textContent;
      const subtitle = document.querySelector(".content-head__subtitle").textContent;

      return { title, subtitle };
    });

  
    await browser.close();
  
    return data;
  }
  

export { noticiaRouter };
