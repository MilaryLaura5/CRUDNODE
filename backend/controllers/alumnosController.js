const db = require("../models/db");

exports.getAlumnos = (req, res) => {
    const query = `
        SELECT alumnos.*, cursos.nombre AS curso
        FROM alumnos JOIN cursos ON alumnos.curso_id = cursos.id
    `;
    db.query(query, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
};

exports.createAlumno = (req, res) => {
    const { nombre, correo, curso_id } = req.body;
    db.query(
        "INSERT INTO alumnos (nombre, correo, curso_id) VALUES (?, ?, ?)",
        [nombre, correo, curso_id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send("Alumno agregado");
        }
    );
};

exports.updateAlumno = (req, res) => {
    const { id } = req.params;
    const { nombre, correo, curso_id } = req.body;

    const query = `
        UPDATE alumnos
        SET nombre = ?, correo = ?, curso_id = ?
        WHERE id = ?
    `;
    db.query(query, [nombre, correo, curso_id, id], (err) => {
        if (err) return res.status(500).send(err);
        res.send("Alumno actualizado");
    });
};

exports.deleteAlumno = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM alumnos WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send("Alumno eliminado");
    });
};
