import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import UseDataCustom from '../../Hooks/UseDataCustom/UseDataCustom';
import Product from './Product/Product';

const Products = () => {
    const [products] =UseDataCustom()
    const mainProducts=products.slice(0, 6)
  
    return (
        <div className='my-5'>
           <Container>
            <h1 className='text-center mb-5 service-title'>Our Products Service</h1>
           <Row xs={1} md={2} lg={3} className="g-4">
            {
                mainProducts.map(product => <Product product={product} key ={product._id}></Product>)
            }
    
  
            </Row>
           </Container>
            
        </div>
    );
};

export default Products;