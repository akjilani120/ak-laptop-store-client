import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css';

const Product = ({product}) => {
    const {img , name, quantity, price,  brand, description, subliarName} =product;
    return (
        <Col>
        <Card className='main-card' style={{border:"1px solid #f8a428"}}>
          <Card.Img className='card-image' variant="top" src={img} />
          <Card.Body>
            <Card.Title>Brand Name : {brand}</Card.Title>
            <Card.Title>Laptop Name :{name}</Card.Title>
            <Card.Title>Price : $ {price}</Card.Title>
          <Card.Title>Quantity : {quantity}</Card.Title>
          <Card.Title>Subliear Name : {subliarName}</Card.Title>
         
            <Card.Text>Description : {description}             
            </Card.Text>
            <button className='btn btn-primary d-block'>Show more</button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Product;