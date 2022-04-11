import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const Notfoundpage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log("We are in Route:", location.pathname); // */about o /faqs

    const navigatesTo = (path) => {
        navigate(path)
    }
    return (
        <div>
            <h4>404- Componente no disponible</h4>
            <button onClick={() => navigatesTo("/")}>Go to Home</button>
        </div>
    );
}

export default Notfoundpage;
