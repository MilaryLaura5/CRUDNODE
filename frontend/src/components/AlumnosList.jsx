import { useEffect, useState } from "react";
import { getAlumnos } from "../services/alumnoService";

export default function AlumnosList({ actualizar }) {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        getAlumnos().then(res => setAlumnos(res.data));
    }, [actualizar]);

    return (
        <ul>
            {alumnos.map(al => (
                <li key={al.id}>
                    {al.nombre} ({al.correo}) - Curso ID: {al.curso_id}
                </li>
            ))}
        </ul>
    );
}
