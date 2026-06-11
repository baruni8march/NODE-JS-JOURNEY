const pool = require("../database");

const getAllPatientsService = async () => {
  const result = await pool.query(
    "SELECT * FROM patients ORDER BY id DESC"
  );

  return result.rows;
};

const getPatientByIdService = async (id) => {
  const result = await pool.query(
    "SELECT * FROM patients WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

const createPatientService = async (patientData) => {
  const { name, age, gender, symptoms } = patientData;

  const result = await pool.query(
    `INSERT INTO patients (name, age, gender, symptoms)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, age, gender, symptoms]
  );

  return result.rows[0];
};

const updatePatientService = async (id, patientData) => {
  const { name, age, gender, symptoms } = patientData;

  const result = await pool.query(
    `UPDATE patients
     SET name = $1, age = $2, gender = $3, symptoms = $4
     WHERE id = $5
     RETURNING *`,
    [name, age, gender, symptoms, id]
  );

  return result.rows[0];
};

const deletePatientService = async (id) => {
  const result = await pool.query(
    "DELETE FROM patients WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllPatientsService,
  getPatientByIdService,
  createPatientService,
  updatePatientService,
  deletePatientService,
};