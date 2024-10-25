import React, { useState } from 'react';

const ReservarHora = () => {
    const [horaSeleccionada, setHoraSeleccionada] = useState('');

    const handleReservar = () => {
        // Lógica para reservar la hora seleccionada
        console.log(`Hora reservada: ${horaSeleccionada}`);
    };

    return (
        <div>
            <h2>Reservar Hora</h2>
            <input 
                type="time" 
                value={horaSeleccionada} 
                onChange={(e) => setHoraSeleccionada(e.target.value)} 
            />
            <button onClick={handleReservar}>Reservar</button>
        </div>
    );
};

export default ReservarHora;
