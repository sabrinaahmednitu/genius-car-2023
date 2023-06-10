
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const Registration = () => {

   const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  
  
  

  const navigate = useNavigate('');
   const NameRef = useRef('');
  const EmailRef = useRef('');
  const PassRef = useRef('');

  const handleForm = (event) => {
    event.preventDefault();

    const email = EmailRef.current.value;
    const password = PassRef.current.value;


    createUserWithEmailAndPassword(email, password);

  };

  const GoToLogin = () => {
    navigate('/login');
  };


  if (user) {
    navigate('/home');
  }

    return (
      <div className="container register w-50 m-auto">
        <h2 className="text-center mt-5 mb-5">Please Register</h2>
        <Form onSubmit={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              ref={NameRef}
              type="text"
              placeholder="Enter your name"
              className="name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={EmailRef}
              type="email"
              placeholder="Enter email"
              className="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={PassRef}
              type="password"
              placeholder="Password"
              className="pass"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your Password with anyone else.
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 bg-info"
            style={{ outline: 'none', border: 'none' }}
          >
            Register
          </Button>
        </Form>
        <p className="mt-5 text-center">
          You already have an account ?{' '}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none "
            onClick={GoToLogin}
          >
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Registration;