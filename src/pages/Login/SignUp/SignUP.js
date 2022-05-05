import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './signUP.css'
import auth from '../../../firebase.init';
const SignUP = () => {
    let erro ;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if(user){
        navigate('/login')
    }
    if(error){
        erro = error.message.slice(22, 42)
    }
    const navigate = useNavigate()
    const handleNavi = () => {
        navigate("/login")
    }
    const hanldSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='container'>
            <div className='form-header'>
                <h1 className='text-center sign-title'>Sign up</h1>
                <div>
                    <Form onSubmit={hanldSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" name='name' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder=" email" name='email' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' />
                        </Form.Group>
                        <p className='text-primary'>You have an account ? <span className='navi' onClick={handleNavi}> login  </span></p>
                        <p className='text-danger'>{erro}</p>
                        <Button variant="primary" type="submit">
                            SignIn
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default SignUP;