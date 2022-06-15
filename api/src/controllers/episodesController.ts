import { Request, Response } from "express";
import axios from "axios";

export default class EpisodeController {
  static async getEpisodes(req: Request, res: Response) {
    const { currentPage } = req.params;
    if (!currentPage) {
      try {
        const episodes = await axios("https://rickandmortyapi.com/api/episode");
        res.send(episodes.data.results);
      } catch (error) {
        res.send(error);
      }
    } else {
      try {
        const episodes = await axios(
          `https://rickandmortyapi.com/api/episode?page=${currentPage}`
        );
        res.send(episodes.data.results);
      } catch (error) {
        res.send(error);
      }
    }
  }

  static async getOneEpisode(req: Request, res: Response) {
    const { idEpisode } = req.params;
    try {
      const episode = await axios(
        `https://rickandmortyapi.com/api/episode/${idEpisode}`
      );
      res.send(episode.data);
    } catch (error) {
      console.log("error en getOneEpisode");
      res.status(404).send("Valor de busqueda incorrecto");
    }
  }
}
