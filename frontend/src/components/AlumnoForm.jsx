import { useState } from "react";
import { addAlumno } from "../services/alumnoService";

export default function AlumnoForm({ onAlumnoAgregado }) {
    const [form, setForm] = useState({ nombre: '', correo: '', curso_id: ''});

    const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async e => {
        e.preventDefault();
        await addAlumno(form);
        setForm({ nombre: '', correo: '', curso_id: '' });
        onAlumnoAgregado();
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
            <input name="correo" value={form.correo} onChange={handleChange} placeholder="Correo" />
            <input name="curso_id" value={form.curso_id} onChange={handleChange} placeholder="ID Curso" />
            <button type="submit">Agregar</button>
        </form>
    );
}