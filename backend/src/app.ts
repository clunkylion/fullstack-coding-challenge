import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
//initialize express
const app = express();

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//routes
app.use(authRoutes);

app.get("/", (req: Request, res: Response): Response => {
  return res.send(`The API is at http://localhost:${app.get("port")}`);
});

export default app;
