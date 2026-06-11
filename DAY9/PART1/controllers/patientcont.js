const patientService = require("../services/patientservice");
const asyncHandler = require("../utils/asyncHandler");

const createError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const getAllPatients = asyncHandler(async (req, res) => {
  const patients = await patientService.getAllPatientsService();

  res.status(200).json({
    success: true,
    message: "Patients fetched successfully",
    data: patients,
  });
});

const getPatientById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const patient = await patientService.getPatientByIdService(id);

  if (!patient) {
    throw createError("Patient not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Patient fetched successfully",
    data: patient,
  });
});

const createPatient = asyncHandler(async (req, res) => {
  const { name, age, gender, symptoms } = req.body;

  if (!name || !age || !symptoms) {
    throw createError("Name, age, and symptoms are required", 400);
  }

  const newPatient = await patientService.createPatientService({
    name,
    age,
    gender,
    symptoms,
  });

  res.status(201).json({
    success: true,
    message: "Patient created successfully",
    data: newPatient,
  });
});

const updatePatient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, symptoms } = req.body;

  if (!name || !age || !symptoms) {
    throw createError("Name, age, and symptoms are required", 400);
  }

  const updatedPatient = await patientService.updatePatientService(id, {
    name,
    age,
    gender,
    symptoms,
  });

  if (!updatedPatient) {
    throw createError("Patient not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Patient updated successfully",
    data: updatedPatient,
  });
});

const deletePatient = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedPatient = await patientService.deletePatientService(id);

  if (!deletedPatient) {
    throw createError("Patient not found", 404);
  }

  res.status(200).json({
    success: true,
    message: "Patient deleted successfully",
    data: deletedPatient,
  });
});

module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};


// const patientService = require("../services/patientservice");

// const getAllPatients = async (req, res) => {
//   try {
//     const patients = await patientService.getAllPatientsService();

//     res.status(200).json({
//       success: true,
//       message: "Patients fetched successfully",
//       data: patients,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch patients",
//       error: error.message,
//     });
//   }
// };

// const getPatientById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const patient = await patientService.getPatientByIdService(id);

//     if (!patient) {
//       return res.status(404).json({
//         success: false,
//         message: "Patient not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Patient fetched successfully",
//       data: patient,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch patient",
//       error: error.message,
//     });
//   }
// };

// const createPatient = async (req, res) => {
//   try {
//     const { name, age, gender, symptoms } = req.body;

//     if (!name || !age || !symptoms) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, age, and symptoms are required",
//       });
//     }

//     const newPatient = await patientService.createPatientService({
//       name,
//       age,
//       gender,
//       symptoms,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Patient created successfully",
//       data: newPatient,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to create patient",
//       error: error.message,
//     });
//   }
// };

// const updatePatient = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, age, gender, symptoms } = req.body;

//     if (!name || !age || !symptoms) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, age, and symptoms are required",
//       });
//     }

//     const updatedPatient = await patientService.updatePatientService(id, {
//       name,
//       age,
//       gender,
//       symptoms,
//     });

//     if (!updatedPatient) {
//       return res.status(404).json({
//         success: false,
//         message: "Patient not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Patient updated successfully",
//       data: updatedPatient,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to update patient",
//       error: error.message,
//     });
//   }
// };

// const deletePatient = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedPatient = await patientService.deletePatientService(id);

//     if (!deletedPatient) {
//       return res.status(404).json({
//         success: false,
//         message: "Patient not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Patient deleted successfully",
//       data: deletedPatient,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to delete patient",
//       error: error.message,
//     });
//   }
// };

// module.exports = {
//   getAllPatients,
//   getPatientById,
//   createPatient,
//   updatePatient,
//   deletePatient,
// };