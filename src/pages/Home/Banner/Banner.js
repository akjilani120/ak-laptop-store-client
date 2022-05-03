import React from 'react';
import './Banner.css'
import banner1 from '../../img/banner/banner1.jpg'
import bannner2 from '../../img/banner/banner2.jpg'
import banner3 from '../../img/banner/banner3.jpg'
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className='banner'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First banner"
                    />
                    <Carousel.Caption>
                        <h3>HP UltraBook</h3>
                        <p>This is now best laptop in the HP laptop Company</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannner2}
                        alt="Second banner"
                    />

                    <Carousel.Caption>
                        <h3>Lenovo</h3>
                        <p>The laptop is Update version and new condition</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third banner"
                    />

                    <Carousel.Caption>
                        <h3>Mac Book</h3>
                        <p>Mac Book laptop best laptop in the world</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;