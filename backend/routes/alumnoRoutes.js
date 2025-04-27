const express = require("express");
const router = express.Router();
const controller = require("../controllers/alumnosController");

router.get("/", controller.getAlumnos);
router.post("/", controller.createAlumno);
router.put("/:id", controller.updateAlumno);   // <--- para editar
router.delete("/:id", controller.deleteAlumno); // <--- para eliminar

module.exports = router;
