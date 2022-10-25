import { Request, Response, NextFunction } from "express";

export const NotFound = (req: Request, res: Response, next: NextFunction) => {
  if (!req.route) return next(new Error("404"));
  next();
};
