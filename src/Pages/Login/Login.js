import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending1] =
    useSendPasswordResetEmail(auth);
  
  
  const EmailRef = useRef('');
  const PassRef = useRef('');

  const handleForm = (event) => {
    event.preventDefault();
    const email = EmailRef.current.value;
    const password = PassRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate('');

  const GoToRegister = () => {
    navigate('/registration');
  };

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

   if (loading || sending1) {
     return <Loading></Loading>;
   }

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;

  if (error) {
    errorElement = <p className="text-danger">Error :{error?.message}</p>;
  }



  const resetPassword = async () => {
     const email = EmailRef.current.value;
    if (email) {
           await sendPasswordResetEmail(email);
           toast('Sent Email');
    }
    else {
      toast('please enter your email address')
    }
  }


  return (
    <div className="container w-50 m-auto">
      <h2 className="text-center mt-5 mb-5">Please Login</h2>
      <Form onSubmit={handleForm} className="mb-2">
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

        <Button
          variant="primary"
          type="submit"
          className="w-100 bg-info"
          style={{ outline: 'none', border: 'none' }}
        >
          Login
        </Button>
      </Form>
      {errorElement}
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
      <p className="text-center">
        Forget Password ?{' '}
        <button
          className="text-primary pointer pe-auto text-decoration-none"
          onClick={resetPassword}
          style={{border:'0' ,outline:'0',background:'transparent'}}
        >
          Reset Your Password
        </button>
      </p>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
