
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const Registration = () => {
  const [agree, setAgree] = useState(false);

   const [createUserWithEmailAndPassword, user] =
     useCreateUserWithEmailAndPassword(auth, { sendEmailVerification :true});
  
  const [updateProfile, updating1, error1] = useUpdateProfile(auth);
  

  const navigate = useNavigate('');
  
  const NameRef = useRef('');
  const EmailRef = useRef('');
  const PassRef = useRef('');

  if (user) {
    console.log(user);
  }

  const handleForm = async (event) => {
    event.preventDefault();

   
    const name = NameRef.current.value;
    const email = EmailRef.current.value;
    const password = PassRef.current.value;

    
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName :name });
     navigate('/home');
    console.log(name)
  };



  const GoToHome = () => {
    navigate('/home');
  };
  const GoToLogin = () => {
    navigate('/login');
  };


  // if (user) {
  //   navigate('/home');
  // }


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
          </Form.Group>

          <Form.Check
            onClick={() => setAgree(!agree)}
            className={agree ? 'mb-2' : 'mb-2 text-danger'}
            type="checkbox"
            label="Accept Genius Car Terms and Conditions"
          />

          <Button
            disabled={!agree}
            onClick={GoToHome}
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