import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const handleNavi =() =>{
        navigate("/signup")
    }
    return (
        <div>
            <h1>I am login page</h1>
           <button onClick={handleNavi}>please sign</button>
        </div>
    );
};

export default Login;