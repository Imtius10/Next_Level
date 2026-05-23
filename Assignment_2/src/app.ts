import type { Request, Response } from "express";
import express from "express";
import { StatusCodes } from "http-status-codes";
import router from "./modules/auth/auth.routes";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json({ success: true, message: "DevPulse API is running." });
});

app.use("/api/auth", router);
app.use("/api/issues", issuesRoutes);

export default app;
