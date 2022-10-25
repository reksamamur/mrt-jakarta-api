import { Request, Response } from "express";

export const Home = async (req: Request, res: Response) => {
  try {
    res.json({
      m: "Welcome to MRT Jakarta API",
    });
  } catch (error) {
    console.log(error);
  }
};
