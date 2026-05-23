import { pool } from "../../db";


export const createUser = async (
  name: string,
  email: string,
  password: string,
  role: string = "contributor",
) => {
  const result = await pool.query(
    `INSERT INTO users (name, email, password, role)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, role, created_at, updated_at`,
    [name.trim(), email.trim().toLowerCase(), password, role],
  );

  return result.rows[0];
};

export const authService = {
  createUser,
};
