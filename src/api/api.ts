import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

import { RouteV1, NotFound, Limiter } from "./v1";

dotenv.config();

const api = express();
const port = process.env.PORT;

api.use(Limiter);

api.use("/", (res: Response) => {
  return res.redirect("/v1");
});

api.use("/v1", RouteV1);

api.use(NotFound);

api.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${port}`);
});

export default api;
