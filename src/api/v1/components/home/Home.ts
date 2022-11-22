import { Request, Response } from "express";

export const Home = async (req: Request, res: Response) => {
  try {
    res.redirect('/')
  } catch (error) {
    console.log(error);
  }
};
