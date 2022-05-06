import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css'
const ProductDetails = () => {
    const navigate =useNavigate()
    const { detailId } = useParams()
    const [product, setProduct] = useState({})
    const { img, name, price, quantity, brand ,description, subliarName, _id } = product
    useEffect(() => {
        const url = `http://localhost:5000/products/${detailId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleDeliver = (id) =>{
        const updateQuantity = parseInt(product.quantity) - 1
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method:"PUT",
            headers :{
                "content-type" : "application/json"
            },
            body :JSON.stringify(updateQuantity)
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
                       
                        <p className=' d-flex'><button onClick={() => handleDeliver( _id)}  className='btn btn-danger w-50 me-3'>Delivered</button>
                        <button className='btn btn-success w-50 '>Delivered</button></p>
                        <p className='show-btn'> <button className='btn btn-warning   p-2 text-white  mb-5 w-100' onClick={handleTotal}>Show more Products</button></p> 
                    </ListGroup>
                 </div> 
             </div>
            
        </div>
    );
};

export default ProductDetails;