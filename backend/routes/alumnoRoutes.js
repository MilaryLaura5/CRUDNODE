const express = require("express");
const router = express.Router();
const controller = require("../controllers/alumnosController");

router.get("/", controller.getAlumnos);
router.post("/", controller.createAlumno);

router.put('/alumnos/:id', controller.updateAlumno);
router.delete('/alumnos/:id', controller.deleteAlumno);

//router.put('/alumnos/:id', alumnosController.updateAlumno);
//router.delete('/alumnos/:id', alumnosController.deleteAlumno);
module.exports = router;