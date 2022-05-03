import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css'
const Product = ({product}) => {
    const {img , name} =product;
    return (
        <Col>
        <Card>
          <Card.Img className='card-image' variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Product;