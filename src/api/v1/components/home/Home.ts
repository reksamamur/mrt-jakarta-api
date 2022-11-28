import { Request, Response } from "express";

export const Home = async (req: Request, res: Response) => {
  try {
    res.json({
      message: "Welcome to MRT Jakarta API",
      documentation: "coming soon",
    })
  } catch (error) {
    console.log(error);
  }
};
