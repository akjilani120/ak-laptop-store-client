import React from 'react';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Experience></Experience>
        </div>
    );
};

export default Home;