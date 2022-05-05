import { Form , Button} from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img from '../img/google.png'
const Login = () => {
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
    const navigate = useNavigate()
    if(user || googleUser){
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
    const hanldSubmit =(event) =>{
        event.preventDefault()        
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)   
    }
    return (
        <div className='container'>
            <div className='form-header'>
                <h1 className='text-center sign-title'>Login Now</h1>
                <div>
                    <Form onSubmit={hanldSubmit}>                      
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder=" email" name='email' />                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' />
                        </Form.Group>
                        <p className='text-primary'>If you have not an account ? <span className='navi' onClick={ handleNavi}> Signup  </span></p>
                        <p className='text-danger'>{erro}</p>
                        <Button variant="primary" type="submit">
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

        </div>
    );
};

export default Login;