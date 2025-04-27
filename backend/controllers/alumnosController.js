const db = require("../models/db");

exports.getAlumnos = (req, res) => {
    const query = `
        SELECT alumnos.*, cursos.nombre AS curso
        FROM alumnos JOIN cursos ON alumnos.curso_id = cursos.id
    `;
    db.query(query, (err, result)=>{
        if (err) return res.status(500).send(err);
        res.json(result);
    });
};

exports.createAlumno = (req, res) => {
    const {nombre, correo, curso_id} = req.body;
    db.query (
        "INSERT INTO alumnos (nombre, correo, curso_id) VALUES (?, ?, ?)",
        [nombre, correo, curso_id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send("Alumno agregado");
        }
    );
};

// Editar alumno
exports.updateAlumno = (req, res) => {
  const { id } = req.params;
  const { nombre, edad, correo } = req.body;
  db.query('UPDATE alumnos SET nombre = ?, edad = ?, correo = ? WHERE id = ?', [nombre, edad, correo, id], (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }
      res.send('Alumno actualizado correctamente');
  });
};

// Eliminar alumno
exports.deleteAlumno = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM alumnos WHERE id = ?', [id], (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }
      res.send('Alumno eliminado correctamente');
  });
};
