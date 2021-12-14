import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import config from "../config";
import jwt from "jsonwebtoken";

function createToken(user: IUser): string {
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
  };
  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: 12000,
  });
}

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let { email, password, gender, name } = req.body;
  if (!email || !password || !gender || !name) {
    return res.status(400).json({
      message: "email, password, gender and name are required",
    });
  }
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).json({
      message: "User already exists",
    });
  }
  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json({
    message: "User created successfully",
    newUser,
  });
};
export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "email and password are required",
    });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }
  const isMatch = await user.comparePassword(password);
  if (isMatch) {
    return res.status(200).json({
      message: "User signed in successfully",
      token: createToken(user),
      user,
    });
  }
  return res.status(400).json({
    message: "Invalid email or password",
  });
};
