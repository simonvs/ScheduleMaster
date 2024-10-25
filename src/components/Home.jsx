import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import image from '../assets/bici.jpg'

const Home = () => {
    return (
        <ImagenTitulos />
    )
}

const ImagenTitulos = () => {
  return (
    <div className="home-container">
        <div className="home-image-container">
            <img 
                src={image} 
                alt="Organización y productividad" 
                className="home-image" 
            />
        </div>
        <div className="home-text-container">
            <h1 className="home-title">Bienvenido a la Plataforma de Agendamiento</h1>
            <h2 className="home-subtitle">Organiza tu tiempo de manera sencilla y eficaz</h2>
            <Link to="/reservar-hora" className="reserve-button">
                Reservar Hora
            </Link>
        </div>
    </div>
  )
}

export default Home
