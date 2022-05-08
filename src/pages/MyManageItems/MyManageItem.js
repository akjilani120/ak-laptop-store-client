import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SubMyItem from './SubMyItem/SubMyItem';

const MyManageItem = () => {
    const [user]=useAuthState(auth)
    const [myItems,setMyItems]=useState([])
    useEffect(()=>{
        const email= user.email;
        const url= `https://secure-hollows-88754.herokuapp.com/myproducts?email=${email}`
        fetch(url, {
            headers:{
                authorization:`Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => setMyItems(data))

    },[user.email])
    const handleDelete = (id) => {
        const permision = window.confirm("Are your delete item")
        if (permision) {
            const url = `https://secure-hollows-88754.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                   
                    const remaing = myItems.filter(pro => pro._id !== id)
                    setMyItems(remaing)
                })

        }
    }
    return (
        <div className='my-5'>
           <Container>
            <h1 className='text-center mb-5 service-title'>Our Products Service</h1>
           <Row xs={1} md={2} lg={3} className="g-4">
            {
               myItems.map(product => <SubMyItem product={product} handleDelete={handleDelete} key ={product._id}></SubMyItem>)
            }
    
  
            </Row>
           </Container>
            
        </div>
    );
};

export default MyManageItem;