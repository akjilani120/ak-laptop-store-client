import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SubMyItem = ({product, handleDelete}) => {
    const {img , name, quantity, price,  brand, description, subliarName, _id} =product;
    
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
         
            <Card.Text style={{fontSize:'15px'}}>Description : {description}             
            </Card.Text>
            <button onClick={() =>handleDelete(_id)} className='btn btn-danger text-white d-block'>Delete</button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default SubMyItem;