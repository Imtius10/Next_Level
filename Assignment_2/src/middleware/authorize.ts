
import { StatusCodes } from "http-status-codes";

import { sendError } from "../utils/response";
import type { UserRole } from "../types";
import type { NextFunction, Request, Response } from "express";

export const authorize = (...roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      sendError(res, StatusCodes.UNAUTHORIZED, "Not authenticated.");
      return;
    }

    if (!roles.includes(req.user.role)) {
      sendError(
        res,
        StatusCodes.FORBIDDEN,
        "You do not have permission to perform this action.",
      );
      return;
    }

    next();
  };
};
