import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseDataCustom from '../Hooks/UseDataCustom/UseDataCustom';
import SubManage from './SubManage/SubManage';

const ManageItems = () => {
   const [products] = UseDataCustom()
    return (
        <div className='my-5'>
           <Container>
            <h1 className='text-center mb-5 service-title'>Our Products Length : {products.length}</h1>
           <Row xs={1} md={2} lg={2} className="g-4">
            {
                products.map(product => <SubManage product={product} key ={product._id}></SubManage>)
            }
    
  
            </Row>
           </Container>
            
        </div>
    );
};

export default ManageItems;