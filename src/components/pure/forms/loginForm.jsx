//Componente que va a contener un formulario para autenticacion de usuario
import React, { useState } from 'react';

const Loginform = () => {
    
    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default Loginform;

