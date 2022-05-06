import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UseDataCustom from '../Hooks/UseDataCustom/UseDataCustom';
import SubManage from './SubManage/SubManage';

const ManageItems = () => {
    const navigate =useNavigate()
    const [products, setProducts] = UseDataCustom()
    const handleDelete = (id) => {
        const permision = window.confirm("Are your delete item")
        if (permision) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaing = products.filter(pro => pro._id !== id)
                    setProducts(remaing)
                })

        }
    }
    const handleNav = () =>{
        navigate('/addNewProduct')
    }
    return (
        <div className='my-5'>
            <Container>
                <h1 className='text-center mb-5 service-title'>Our Products Length : {products.length}</h1>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {
                        products.map(product => <SubManage product={product} key={product._id} handleDelete={handleDelete}></SubManage>)
                    }


                </Row>
                <p><button onClick={handleNav} className='btn btn-warning px-4 py-2 my-4 text-white'>Add New Item</button></p>
            </Container>

        </div>
    );
};

export default ManageItems;