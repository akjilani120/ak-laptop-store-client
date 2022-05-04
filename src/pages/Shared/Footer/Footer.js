import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className=''>
                    <div className="footer-overflow pt-5">
                        <div className="footer-number">
                            <div className="logo">
                                <h1> <span className='sub-logo'>AK</span > <span className='text-white'>Laptop Store.</span></h1>
                            </div>
                            <p className='text-white'>Our Laptop store is the best Store.It has  update laptop and best laptop.Our service is best service</p>
                            <hr className='bg-white mt-3' />
                        </div>
                        <div className="footer-number">
                            <h4 className='text-white '>Shop info</h4>
                            <div className='text-white d-flex text-center'>
                                <p className='p-0 m-0'>Address:</p>
                                <p className='ms-2 p-0 m-0'>955 East Avenu. Sector 9 Russel Squire.UK</p>
                            </div>
                            <hr className='bg-white' />
                            <div className='text-white d-flex text-center p-0 m-0'>
                                <p className='p-0 m-0'> Email : <span className='ms-3'>abdulkaderjilani@gmail.com</span>. </p>
                            </div>
                            <hr className='bg-white' />
                            <div className='text-white d-flex text-center'>
                                <p className='p-0 m-0'>Hours :</p>
                                <p className='ms-3 p-0 m-0'>Mon - Fri (9am- 6pm)</p>

                            </div>
                        </div>
                        <div className="footer-number">
                            <h4>Service</h4>
                            <ul>
                                <li>Dell laptop</li>
                                <li>Asus Laptop</li>
                                <li>HP Laptop</li>
                                <li>Lenovo</li>
                                <li>Mac Book</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className="last-footer">
                <p className='text-center text-white'>Copyright 2016  All right reserved by ak jilani</p>
            </div>
        </div>
    );
};

export default Footer;