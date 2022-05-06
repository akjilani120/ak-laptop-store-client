import React from 'react';
import './NotFound.css'
import img from '../img/notfound.jpg'
const NotFound = () => {
    return (
        <div className='not-found'>
            <img width={"100%"} height={'450px'} src={img} alt="" />
        </div>
    );
};

export default NotFound;