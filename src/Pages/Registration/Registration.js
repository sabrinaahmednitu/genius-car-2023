
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Registration = () => {
  const navigateToLogin = useNavigate('');
   const NameRef = useRef('');
  const EmailRef = useRef('');
  const PassRef = useRef('');

  const handleForm = (event) => {
    event.preventDefault();

    const Email = EmailRef.current.value;
    const Pass = PassRef.current.value;
  };

  const GoToLogin = () => {
    navigateToLogin('/login');
  };
    return (
      <div className="container register">
        <h2 className="text-center mt-5 mb-5">Please Register</h2>
        <Form onSubmit={handleForm} className='w-50 m-auto' >
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

          <Button variant="primary" type="submit" className='w-100'>
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
      </div>
    );
};

export default Registration;