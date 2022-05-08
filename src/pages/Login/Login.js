import { Form , Button} from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import img from '../img/google.png'
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';

const Login = () => {
    const emailRef =useRef('')  
   
    const [signInWithGoogle, googleUser, gooleLoading] = useSignInWithGoogle(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let erro ;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
    const navigate = useNavigate()
    if(user || googleUser){
        const email = emailRef.current.value;
        const addedToken ={email}
           fetch("http://localhost:5000/login", {
           method:"POST",
           headers:{
            "content-type" :"application/json"
        },
        body : JSON.stringify(addedToken)
       })
       .then(res => res.json())
       .then(data =>{
       localStorage.setItem("accessToken", data.token)
       })
       
        navigate(from, { replace: true });
    }
    if(error){
        erro = error.message.slice(22, 36)
    }
    const handleGoogle = () =>{
        signInWithGoogle()
    }
    const handleNavi =() =>{
        navigate("/signup")
    }
    const hanldSubmit = async(event) =>{
        event.preventDefault()        
        const email = event.target.email.value;
        const password = event.target.password.value;
        
       signInWithEmailAndPassword(email, password)  
    
       
       
    }
    
    const handleReset = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email'); 
    }
    return (
        <div className='container'>
            <div className='form-header'>
                <h1 className='text-center sign-title'>Login Now</h1>
                <div>
                    <Form onSubmit={hanldSubmit}>                      
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef}  placeholder=" email" name='email' />                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' />
                        </Form.Group>
                        <p className='text-primary'>If you have not an account ? <span className='navi' onClick={ handleNavi}> Signup  </span></p>
                        <p className='text-danger'>{erro}</p>
                        <p className='text-primary'>Forget password ? <span className='navi' onClick={handleReset}> Reset password  </span></p>
                        <Button variant="warning" type="submit">
                          Login
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
            <ToastContainer />
        </div>
    );
};

export default Login;