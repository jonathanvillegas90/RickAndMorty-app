import { Request, Response } from "express";
import axios from "axios";

export default class CharacterController {
  static async getAllCharacters(req: Request, res: Response) {
    const { currentPage } = req.body;
    if (!currentPage) {
      try {
        const characters = await axios(
          "https://rickandmortyapi.com/api/character"
        );
        res.send(characters.data.results);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    } else {
      try {
        const characters = await axios(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`
        );
        res.send(characters.data.results);
      } catch (error) {
        console.log("error en getAll", error);
        res.send(error);
      }
    }
  }

  static async getSearchCharacter(req: Request, res: Response) {
    const { idCharacter } = req.params;
    try {
      const character = await axios(
        `https://rickandmortyapi.com/api/character/${idCharacter}`
      );
      res.send(character.data);
    } catch (error) {
      console.log("error en getSearch", error);
      res.send(error);
    }
  }
}
