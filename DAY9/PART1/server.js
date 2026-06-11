const express = require("express");
require("dotenv").config();
const errorMiddleware = require("./middlewares/errormiddleware");
const patientRoutes = require("./routes/patientroute");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("D9P1 PostgreSQL CRUD API is running");
});

app.use("/api/patients", patientRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});