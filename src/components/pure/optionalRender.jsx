import React, { useState } from 'react';

//Login, Logout buttons
const LoginButton = ({loginAcction, propStyle}) => {
    return <button style={propStyle} onClick={loginAcction}>Login</button>
}

const LogoutButton = ({logoutAcction, propStyle}) => {
    return <button style={propStyle} onClick={logoutAcction}>Logout</button>
}


// ? (Expresion true) && Expresion =>Se renderiza la expresion
// ? (Expresion false) && Expresion =>No se renderiza la expresion

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: "white",
    fontWeight: "bold"
}

//Estilo para usuario no Logeado
const unloggedStyle = {
    backgroundColor: "tomato",
    color: "white",
    fontWeight: "bold"
}


const Optionalrender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);
    //const updateAccess = () => {
    //    setAccess(!access);
    //}

    const loginAcction = () => {
        setAccess(true)
    }

    const logoutAcction = () => {
        setAccess(false)
    }

    let optionalButton;

    if(access) {
        optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAcction={logoutAcction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={ loggedStyle } loginAcction={loginAcction}></LoginButton>
    }

    //Sin Leer mensajes

    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/*Boton opcional*/}
            { optionalButton }
            {/*Mensajes sin leer*/}
            {/*{ nMessages > 0 && nMessages === 1 && <p>Hay {nMessages} sin leer...</p>}
            { nMessages > 1 && <p>Tienes {nMessages} sin leer...</p>}
            { nMessages === 0  && <p>No hay mensajes sin leer...</p>}*/}
            {/*Operador Ternario*/}
            {access ? 
            (
            <div>
            { nMessages > 0  ? 
            <p>Tienes {nMessages} mensaje{nMessages > 1 ?"s": null} sin leer...</p>
            : 
            <p>No hay mensajes sin leer...</p>
            }
            <button onClick={addMessages}>{nMessages === 0 ? "Añade tu primer mensaje": "Añada nuevos mensajes"}</button>
            </div>
            ) 
            : 
            null
            }
        </div>
    );
}

export default Optionalrender;
