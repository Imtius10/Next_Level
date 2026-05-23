
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

import { sendError } from "../utils/response";
import type { NextFunction, Request, Response } from "express";
import type { JwtPayload } from "../types";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.headers["authorization"];

  if (!token) {
    sendError(
      res,
      StatusCodes.UNAUTHORIZED,
      "Access denied. No token provided.",
    );
    return;
  }

  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as JwtPayload;
    req.user = decoded;
    next();
  } catch {
    sendError(res, StatusCodes.UNAUTHORIZED, "Invalid or expired token.");
  }
};
