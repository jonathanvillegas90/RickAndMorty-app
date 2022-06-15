import { Request, Response } from "express";
import axios from "axios";

export default class LocationController {
  static async getAllLocations(req: Request, res: Response) {
    const { pageLocation } = req.params;
    if (!pageLocation) {
      try {
        const locations = await axios(
          "https://rickandmortyapi.com/api/location"
        );
        res.send(locations.data.results);
      } catch (error) {
        res.sendStatus(404).send("No se encuentra");
      }
    } else {
      try {
        const locations = await axios(
          `https://rickandmortyapi.com/api/location?page=${pageLocation}`
        );
        res.send(locations.data.results);
      } catch (error) {
        res.sendStatus(404).send("No se encuentra");
      }
    }
  }

  static async getLocation(req: Request, res: Response) {
    const { name } = req.params;
    try {
      const location = await axios(
        `https://rickandmortyapi.com/api/location/?name=${name}`
      );
      res.send(location.data);
    } catch (error) {
      res.sendStatus(404).send("No se encontro");
    }
  }
}
