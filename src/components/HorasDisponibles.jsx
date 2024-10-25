import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HorasDisponibles = () => {
    const [horas, setHoras] = useState([]);  // Para almacenar las horas disponibles
    const [loading, setLoading] = useState(true);  // Para manejar el estado de carga
    const [error, setError] = useState(null);  // Para manejar errores

    useEffect(() => {
        // Petición al backend para obtener las horas disponibles
        axios.get('/api/horarios?start=2024-10-01&end=2024-10-07')  // Puedes cambiar la fecha según necesites
            .then(response => {
                setHoras(response.data);  // Guardar las horas recibidas
                setLoading(false);
            })
            .catch(err => {
                setError('Error al cargar las horas disponibles');
                setLoading(false);
            });
    }, []);  // El array vacío indica que se ejecuta solo una vez al cargar el componente

    if (loading) {
        return <p>Cargando horas disponibles...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Horas Disponibles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {horas.map((hora, index) => (
                        <tr key={index}>
                            <td>{hora.fecha}</td>
                            <td>{hora.hora}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HorasDisponibles;
