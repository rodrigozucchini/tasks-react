import React from 'react';
import { useNavigate } from 'react-router-dom'

//Me falta poner el boton que va para atras


const Profilepage = ({User}) => {

    const history = useNavigate();

    const navigateTo = (path) => {
        history(path)
    }

    const goHome = (path) => {
        history(path)
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={()=> navigateTo('/tasks')}>Tasks</button>
            <button onClick={()=> goHome('/')}>Go Home</button>
        </div>
    );
}

export default Profilepage;
