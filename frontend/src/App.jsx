import { useState } from 'react'
import AlumnoForm from './components/AlumnoForm'
import AlumnosList from './components/AlumnosList'

/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

function App() {
  const [actualizar, setActualizar] = useState(false);

  const refrescar = () => setActualizar(!actualizar);

  return (
    <div>
      <div className='contenedor'>
        <h1>Registro de Alumnos</h1>
        <AlumnoForm onAlumnoAgregado={refrescar}/>
        <AlumnosList actualizar={actualizar}/>
      </div>
    </div> 
  );
}

export default App
