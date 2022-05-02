import React from 'react';

import './LogoHeader.css'


const LogoHeader = () => {
    return (
        <div className='logo-header'>
            <div className="px-3">
                <div className="logo-main">
                    <div className="logo-items">
                        <div className="logo">
                          <h1> <span className='sub-logo'>AK</span> Laptop Store.</h1>
                        </div>
                    </div>
                    <div className="logo-items">
                        <div className='icon-head'>
                            <div className="icon-part">
                                <p><svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg></p>
                            </div>
                            <div className="icon-about">
                                <p className='icon-title'>Visited Us</p>
                                <p className='icon-adress'>25 Zee Street Tx</p>
                            </div>
                        </div>
                    </div>
                    <div className="logo-items">
                        <div className='icon-head'>
                            <div className="icon-part">
                                <p><svg xmlns="http://www.w3.org/2000/svg" className="svg-icon"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg></p>
                            </div>
                            <div className="icon-about">
                                <p className='icon-title'>Call Us now</p>
                                <p className='icon-adress'>+88017707447707</p>
                            </div>
                        </div>
                    </div>

                    <div className="logo-items">
                        <div className='icon-head'>
                            <div className="icon-part">
                                <p><svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></p>
                            </div>
                            <div className="icon-about">
                                <p className='icon-title'>Mon - Sat</p>
                                <p className='icon-adress'>9.00-18.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="logo-items">
                        <button className='get-btn '>Get Free Quote</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogoHeader;