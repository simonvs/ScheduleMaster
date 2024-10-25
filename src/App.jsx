import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HorasDisponibles from './components/HorasDisponibles'
import ReservarHora from './components/ReservarHora'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/horas-disponibles">Ver Horas Disponibles</Link>
                    </li>
                    <li>
                        <Link to="/reservar-hora">Reservar Hora</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/horas-disponibles" element={<HorasDisponibles />} />
                <Route path="/reservar-hora" element={<ReservarHora />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App
