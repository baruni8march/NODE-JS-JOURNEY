const express = require("express");
require("dotenv").config();

const patientRoutes = require("./routes/patientroute");
const authRoutes = require("./routes/authroute");
const errorMiddleware = require("./middlewares/errormiddleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("D10P1 Register API is running");
});

app.use("/api/patients", patientRoutes);
app.use("/api/auth", authRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});