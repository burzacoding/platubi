import { Request, Response } from "express";
import { Endpoint, RequestType } from "firebase-backend";

export default new Endpoint(
  'symbols',
  RequestType.GET,
  (request: Request, responde: Response) => {

  }
)
