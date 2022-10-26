import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const [error,setError]  = useState('');  
    const { createUser, UpdateUserProfile } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        createUser(email,password)
        .then( res=> {
            const user = res.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
        })
        .catch(e => {
            console.error(e)
            setError(e.message)
        })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        UpdateUserProfile(profile)
        .then(()=> {})
        .catch(error => console.error(error));
    }

    const handleAccepted = (e) => {
        setAccepted(e.target.checked);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="name" placeholder="Your Name" />              
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="photoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required/>              
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Text className="text-danger">
                     {error}   
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                            type="checkbox"
                            onClick={handleAccepted} 
                            label={<>Accept <Link to='/faq'>Terms and Conditions</Link></>}
                    ></Form.Check>        
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;
