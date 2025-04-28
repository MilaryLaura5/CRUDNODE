import { useEffect, useState } from "react";
import { getAlumnos, deleteAlumno, updateAlumno } from "../services/alumnoService";

export default function AlumnosList({ actualizar }) {
    const [alumnos, setAlumnos] = useState([]);
    const [editando, setEditando] = useState(null);
    const [formEdit, setFormEdit] = useState({ nombre: '', correo: '', curso_id: '' });

    const cargarAlumnos = () => {
        getAlumnos().then(res => setAlumnos(res.data));
    };

    useEffect(() => {
        cargarAlumnos();
    }, [actualizar]);

    const handleDelete = async (id) => {
        if (confirm("¿Seguro que quieres eliminar este alumno?")) {
            await deleteAlumno(id);
            cargarAlumnos();
        }
    };

    const handleEditClick = (alumno) => {
        setEditando(alumno.id);
        setFormEdit({ nombre: alumno.nombre, correo: alumno.correo, curso_id: alumno.curso_id });
    };

    const handleEditChange = (e) => {
        setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        await updateAlumno(editando, formEdit);
        setEditando(null);
        cargarAlumnos();
    };

    return (
        <ul className="lista-alumnos">
            {alumnos.map(al => (
                <li key={al.id} className="alumno-item">
                    {editando === al.id ? (
                        <form onSubmit={handleEditSubmit}>
                            <input
                                name="nombre"
                                value={formEdit.nombre}
                                onChange={handleEditChange}
                                placeholder="Nombre"
                            />
                            <input
                                name="correo"
                                value={formEdit.correo}
                                onChange={handleEditChange}
                                placeholder="Correo"
                            />
                            <input
                                name="curso_id"
                                value={formEdit.curso_id}
                                onChange={handleEditChange}
                                placeholder="ID Curso"
                            />
                            <button type="submit">Guardar</button>
                            <button type="button" onClick={() => setEditando(null)}>Cancelar</button>
                        </form>
                    ) : (
                        <>
                            {al.nombre} ({al.correo}) - Curso: {al.curso}
                            <button onClick={() => handleEditClick(al)}>Editar</button>
                            <button onClick={() => handleDelete(al.id)}>Eliminar</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}
