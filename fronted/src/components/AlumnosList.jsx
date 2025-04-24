import { useEffect, useState } from "react";
import { getAlumnos, deleteAlumno } from "../services/alumnoService";

export default function AlumnosList({ actualizar }) {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        getAlumnos().then(res => setAlumnos(res.data));
    }, [actualizar]);

    const handleDelete = async (id) => {
        if (window.confirm("¿Seguro que deseas eliminar este alumno?")) {
            await deleteAlumno(id);
            // Actualiza la lista después de eliminar
            getAlumnos().then(res => setAlumnos(res.data));
        }
    };

    return (
        <ul>
            {alumnos.map(al => (
                <li key={al.id}>
                    {al.nombre} ({al.correo}) - Curso ID: {al.curso_id}
                    <button onClick={() => handleDelete(al.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}
