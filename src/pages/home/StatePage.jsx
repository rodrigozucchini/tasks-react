import React from 'react';
import { useLocation } from 'react-router-dom'

const Statepage = () => {

    const location = useLocation();

    console.log(location.state.online) //State sent
    console.log(location.search) //Query Params Sent

    return (
        <div>
            <h1>State: {location.search}</h1>
        </div>
    );
}

export default Statepage;
