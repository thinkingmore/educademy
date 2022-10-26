import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';



const Login = () => {

    const [error, setError] = useState('');
    const { signIn, providerLogin } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn (email,password)
        .then( res => {
            const user =  res.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }
    

    const noAccount = (e) => {
        const yes = (e.target.checked);
        if(yes === true){
            navigate('/register');
        }
    }

    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () => {
        providerLogin (googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='w-50 mx-auto'>        
            <Form onSubmit={handleSubmit} className="mt-4">
                <h3 className='my-4'>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-danger">
                   {error}
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div class="form-check form-switch my-4">
                    <input onClick={noAccount} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefaul/"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Don't have an account yet,go to register page.</label>
                </div>
            </Form>
            <>
                <Button onClick={handleGoogleSignIn} className='me-4' variant="primary"><FaGoogle/><span className='ms-2'>Login with Google</span></Button>
                <Button className='me-4' variant="primary"><FaGithub/><span className='ms-2'>Login with Github</span></Button>
                
            </>        
        </div>
    );
};

export default Login;