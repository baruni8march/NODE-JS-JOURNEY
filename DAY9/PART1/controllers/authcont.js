const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw createError("Email and password are required", 400);
  }

  const user = await authService.findUserByEmailService(email);

  if (!user) {
    throw createError("Invalid email or password", 401);
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw createError("Invalid email or password", 401);
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.status(200).json({
    success: true,
    message: "Login successful",
    token: token,
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

module.exports = {
  registerUser,
  loginUser,
};