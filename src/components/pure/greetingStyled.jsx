import React, { useState } from 'react';

//Estilo para usuario Logeado
const loggedStyle = {
    color: "blue"
}

//Estilo para usuario no Logeado
const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold"
}

const Greetingstyled = (props) => {
//Generamos un estado para el componente 
// Y así controlar si el usuario est'a o no logueado

const [logged, setLogged] = useState(false)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            <p>Hola{props.name}</p>
            <button 
                onClick={() => {
                    console.log("Botón pulsado")
                    setLogged(!logged)
                }}>
                { logged ? 'Logout' : 'Login' }</button>
        </div>
    );
}

export default Greetingstyled;
