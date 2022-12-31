import { Request, Response } from "express";

export const Home = async (req: Request, res: Response) => {
  try {
    res.json({
      message: "Welcome to MRT Jakarta API",
      documentation_en: "https://github.com/reksamamur/mrt-jakarta-api",
      documentation_id: "https://mrt-doc-api.vercel.app/",
      status: "Ready",
    });
  } catch (error) {
    console.log(error);
  }
};
