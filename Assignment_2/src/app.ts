import express, { type Request, type Response } from "express";
import { StatusCodes } from "http-status-codes";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json({ success: true, message: "DevPulse API is running." });
});



export default app;