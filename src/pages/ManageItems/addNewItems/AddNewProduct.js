import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './AddNewProduct.css'

const AddNewProduct = () => {
    const [user] = useAuthState(auth)
   

    const hanldSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = user.email;
        const brand = event.target.brand.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const subliarName = event.target.subliarName.value;
        const img = event.target.img.value;
        const addNewProduct= { name, email, brand , quantity, price , description, subliarName, img }
        const url =` https://secure-hollows-88754.herokuapp.com/products`
        fetch(url, {
            method:"POST",
            headers:{
                "content-type" :"application/json"
            },
            body : JSON.stringify(addNewProduct)
        })
        .then(res => res.json())
        .then(data => {          
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
                            <Form.Control type="text"  name='brand' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Product Name  </Form.Label>
                            <Form.Control type="text"  name='name' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Quantity </Form.Label>
                            <Form.Control type="text"  name='quantity' required  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price </Form.Label>
                            <Form.Control type="text"  name='price' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Discription</Form.Label> <br />
                          
                            <textarea className='desciption' name="description" id="" cols="30" rows="3" required ></textarea>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subliar Name </Form.Label>
                            <Form.Control type="text"  name='subliarName' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text"  name='img' required />
                        </Form.Group>                       
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={user?.email} name='email' required readOnly />
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