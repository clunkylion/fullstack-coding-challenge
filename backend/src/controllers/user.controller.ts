import { Request, Response } from "express";

export const signUp = (req: Request, res: Response): Response => {
  return res.send("signUp");
};
export const signIn = (req: Request, res: Response): Response => {
  return res.send("signIn");
};
