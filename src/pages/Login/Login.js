import { Form , Button} from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
    let erro ;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    if(user){
        navigate("/home")
    }
    if(error){
        erro = error.message.slice(22, 36)
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
            </div>

        </div>
    );
};

export default Login;