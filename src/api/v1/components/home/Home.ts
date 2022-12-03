import { Request, Response } from "express";

export const Home = async (req: Request, res: Response) => {
  try {
    res.json({
      message: "Welcome to MRT Jakarta API",
      documentation: "https://mrt-doc-api.vercel.app/",
      status: "In Progress"
    });
  } catch (error) {
    console.log(error);
  }
};
