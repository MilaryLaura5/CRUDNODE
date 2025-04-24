import axios from 'axios';

const API_URL = 'http://localhost:3001/api/alumnos';

export const getAlumnos = () => axios.get(API_URL);
export const addAlumno = (data) => axios.post(API_URL, data);

export const updateAlumno = (id, alumno) => axios.put(`${API_URL}/${id}`, alumno);
export const deleteAlumno = (id) => axios.delete(`${API_URL}/${id}`);