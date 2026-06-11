const pool = require("../database");

const findUserByEmailService = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return result.rows[0];
};

const createUserService = async (userData) => {
  const { name, email, password, role } = userData;

  const result = await pool.query(
    `INSERT INTO users (name, email, password, role)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, role, created_at`,
    [name, email, password, role || "chw"]
  );

  return result.rows[0];
};

module.exports = {
  findUserByEmailService,
  createUserService,
};