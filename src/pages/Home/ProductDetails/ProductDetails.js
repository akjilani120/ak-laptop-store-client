import React, { useEffect, useState } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css'
const ProductDetails = () => {
    const navigate =useNavigate()
    const { detailId } = useParams()
    const [product, setProduct] = useState({})
    const { img, name, price, quantity, brand ,description, subliarName } = product
    useEffect(() => {
        const url = `http://localhost:5000/products/${detailId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleDeliver = () =>{
        const updateQua = parseInt(product.quantity)
        const updateQuantity = updateQua - 1
        const mainQuantity = {updateQuantity}      
        const url = `http://localhost:5000/products/${detailId}`
        fetch(url, {
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(mainQuantity)
        })
        
        
        
    }
    const handleQuantity = (event) =>{
        event.preventDefault()
        const inputQuantity = event.target.quantity.value;
        const addQuantity =parseInt(product.quantity) + parseInt(inputQuantity)
        const quantity ={addQuantity}
        const url = `http://localhost:5000/products/${detailId}`
        fetch(url, {
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(quantity)
        })
        
    }
    const handleTotal = () =>{
        navigate('/manageItems')
    }
    return (
        <div className='details-main'>
            <div className='details'>
                <div className='details-header' style={{ backgroundImage: `url(${img})` }} >
                    <div className="details-overflow"></div>
                </div>
                <div className='details-abs'>
                    <img src={img} alt="" />
                </div>
                
            </div>
            <div className='d-flex justify-content-center mt-4 pb-5 ' >
               
                  <div className=' list-header mx-lg-0 mx-2'>
                  <ListGroup>
                       
                        <ListGroup.Item className='p-2'>Brand Name : {brand}</ListGroup.Item>
                        <ListGroup.Item className='p-2'>Product Name : {name}</ListGroup.Item>
                        <ListGroup.Item className='p-2'>Price  : $ {price}</ListGroup.Item>
                        <ListGroup.Item className='p-2'>Quantity : {quantity}</ListGroup.Item>
                        <ListGroup.Item className='p-2'>Description : {description}</ListGroup.Item>
                        <ListGroup.Item className='p-2'>Subliar Name : {subliarName}</ListGroup.Item>
                       
                        <p className=''><button style={{height:"40px"}} onClick={ handleDeliver}  className=' btn btn-danger  me-3 my-2'>Delivered</button>                      
                        <Form onSubmit={handleQuantity}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label ><b>Add Quantity</b></Form.Label>
                            <Form.Control type="text"   name='quantity' />                            
                        </Form.Group>
                        <Button className='text-white' variant="warning" type="submit">
                          Submit
                        </Button>
                        </Form>
                        <hr />
                        </p>
                       
                        <p className='show-btn'> <button  className='btn btn-warning   p-2 text-white  mb-5 w-100' onClick={handleTotal}>Show more Products</button></p> 
                    </ListGroup>
                 </div> 
             </div>
            
        </div>
    );
};

export default ProductDetails;