import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddNewProduct.css'
const AddNewProduct = () => {
    const hanldSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const brand = event.target.brand.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const subliarName = event.target.subliarName.value;
        const img = event.target.img.value;
        const addNewProduct= { name, email, brand , quantity, price , description, subliarName, img }
        const url =`http://localhost:5000/products`
        fetch(url, {
            method:"POST",
            headers:{
                "content-type" :"application/json"
            },
            body : JSON.stringify(addNewProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
      
    }
    return (
        <div className='container'>
            <div className='form-header'>
                <h1 className='text-center sign-title'>Add Product</h1>
                <div>
                    <Form onSubmit={hanldSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Brand Name </Form.Label>
                            <Form.Control type="text"  name='brand' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Product Name  </Form.Label>
                            <Form.Control type="text"  name='name' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Quantity </Form.Label>
                            <Form.Control type="text"  name='quantity' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price </Form.Label>
                            <Form.Control type="text"  name='price' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Discription</Form.Label> <br />
                            {/* <Form.Control type="text"  name='description' /> */}
                            <textarea className='desciption' name="description" id="" cols="30" rows="3"></textarea>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subliar Name </Form.Label>
                            <Form.Control type="text"  name='subliarName' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text"  name='img' />
                        </Form.Group>                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' />
                        </Form.Group>                       
                        
                        <Button variant="primary" type="submit">
                           Add Product
                        </Button>
                    </Form>
                </div>
               
            </div>

        </div>
    );

};

export default AddNewProduct;