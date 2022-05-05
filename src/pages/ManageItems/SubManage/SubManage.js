import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const SubManage = ({ product }) => {
    const { img, name, quantity, price, brand, description, subliarName } = product;
    return (
        <Col>
            <Card >
                <Card.Img variant="top" style={{height:"300px"}} src={img} />
                <Card.Body>
                   
                    <Card.Title> Name : {name}</Card.Title>
                    <Card.Text>
                       <b>Description :</b>{description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <b>Price : </b> {price}</ListGroupItem>
                    <ListGroupItem> <b>Quantity : </b> {quantity}</ListGroupItem>
                    <ListGroupItem> <b>Brand : </b> {brand}</ListGroupItem>
                    <ListGroupItem> <b>subliarName : </b> {subliarName}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                   <button className='btn btn-danger'>Delete</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SubManage;