const bcrypt = require("bcrypt");

const authService = require("../services/authservice");
const asyncHandler = require("../utils/asynchandler");
const createError = require("../utils/createerror");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    throw createError("Name, email, and password are required", 400);
  }

  if (password.length < 6) {
    throw createError("Password must be at least 6 characters", 400);
  }

  const existingUser = await authService.findUserByEmailService(email);

  if (existingUser) {
    throw createError("Email already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await authService.createUserService({
    name,
    email,
    password: hashedPassword,
    role,
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: newUser,
  });
});

module.exports = {
  registerUser,
};