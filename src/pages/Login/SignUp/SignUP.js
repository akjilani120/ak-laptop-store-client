import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import './signUP.css'
import auth from '../../../firebase.init';
import img from '../../img/google.png'
const SignUP = () => {
    const [updateProfile, updating, ] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, gooleLoading] = useSignInWithGoogle(auth);
    let erro ;
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    if(user ){
        navigate('/login')
    }
    if(error){
        erro = error.message.slice(22, 42)
    }
    if(googleUser){
        navigate('/home')
    }
    const handleNavi = () => {
        navigate('/login')
    }
    const hanldSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
       await  createUserWithEmailAndPassword(email, password)
       await updateProfile({name});
       navigate("/login")
    }
    const handleGoogle = () =>{
        signInWithGoogle()
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
                            Sign In
                        </Button>
                    </Form>
                </div>
                <div className='d-flex align-items-center'>
                <hr className='bg-dark w-50  mx-2 ' /> 
                <h5>Or</h5>
                <hr className='bg-dark w-50 mx-2' />
                </div>
                <div className='google pb-5 mt-3'>
                    <button onClick={handleGoogle} className='google-btn'><img src={img} alt="" /> Google sign In </button>
                </div>
            </div>

        </div>
    );
};

export default SignUP;