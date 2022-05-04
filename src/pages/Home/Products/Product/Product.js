import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {img , name, quantity, price,  brand, description, subliarName, _id} =product;
    const navigate =useNavigate()
    const handleUpdate =(id) =>{
      navigate(`/productDetails/${id}`)
    }
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
            <button onClick={() =>handleUpdate(_id)} className='btn btn-warning text-white d-block'>Update</button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Product;