import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const Aboutpages = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log("We are in Route:", location.pathname); // */about o /faqs

    const navigates = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={() => navigates("/")}>
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default Aboutpages;
