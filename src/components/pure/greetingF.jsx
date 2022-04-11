import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {

    const [age, setage] = useState(29);

    const birthday = () => {
        setage(age +1)
    }

    return (
        <div>
            <h1>
                Hola { props.name } desde Componente Funcional
            </h1>
            <h2>
                Tienes: {age} años
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string,
};


export default Greetingf;
