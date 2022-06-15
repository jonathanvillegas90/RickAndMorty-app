import { Request, Response } from "express";

export default class StatusController {
  static async getStatus(_req: Request, res: Response) {
    res.status(200).json("Servidor en linea");
  }
}
