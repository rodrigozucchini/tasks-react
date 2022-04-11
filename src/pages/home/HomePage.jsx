import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';


const Homepage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log("We are in Route:", location.pathname); // */about o /faqs

    const navigates = (path) => {
        navigate(path)
    }

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: "?online=true",
            state: {
                online: true
            }
        });
    }

    return (
        <div>
            <h1>Inicio de página</h1>
            <button onClick={() => navigateProps("/online-state")}>
                Go to Page with State / Query Params
            </button>
            <button onClick={() => navigates("/profiles")}>
                Go to Profile
            </button>
        </div>
    );
}

export default Homepage;
