import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const navigateToRegister = useNavigate('');
 
  const EmailRef = useRef('');
  const PassRef = useRef('');

  const handleForm = (event) => {
    event.preventDefault();

    const Email = EmailRef.current.value;
    const Pass = PassRef.current.value;
  }


  const GoToRegister = () => {
    navigateToRegister('/registration')
  }

    return (
      <div className="container">
        <h2 className="text-center mt-5 mb-5">Please Login</h2>
        <Form onSubmit={handleForm} className="w-50 m-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={EmailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={PassRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className='w-100' >
            Login
          </Button>
        </Form>
        <p className="mt-5 text-center">
          New To Genius Car ?{' '}
          <Link
            to="/registration"
            className="text-danger pointer pe-auto text-decoration-none"
            onClick={GoToRegister}
          >
            Please Register
          </Link>
        </p>
      </div>
    );
};

export default Login;