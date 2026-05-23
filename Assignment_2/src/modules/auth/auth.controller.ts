
import { StatusCodes } from "http-status-codes";

import { sendSuccess, sendError } from "../../utils/response";
import type { Request, Response } from "express";
import type { UserRole } from "../../types";
import { createUser } from "./auth.service";


// ──────────────────────────────────────────────
// POST /api/auth/signup
// ──────────────────────────────────────────────
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body as {
      name: string;
      email: string;
      password: string;
      role?: UserRole;
    };

    const user = await createUser(name, email, password, role);

    sendSuccess(res, StatusCodes.CREATED, "User registered successfully", user);
  } catch (error) {
    console.error("[signup]", error);

    sendError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      "An unexpected error occurred.",
    );
  }
};

export const authController = {
  signup,
};
