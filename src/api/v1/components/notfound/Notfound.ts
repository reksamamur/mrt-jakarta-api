import { Request, Response, NextFunction } from "express";
import {Error} from '../../../template'

export const NotFound = (req: Request, res: Response, next: NextFunction) => {
  if (!req.route) return res.json(Error(404, "Not Found"));
  next();
};