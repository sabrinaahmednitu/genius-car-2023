import React, { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
  import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../hooks/AuthProvider';


const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateSignup = () => {
    navigate('/signup');
  };

  //  for signUp
  const loginOnSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert(' Thank you !!!', 'Successfully login');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container w-50 m-auto">
      <h2 className="text-center mt-5 mb-5">Please Login</h2>
      {/* form-right */}
      <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white pt-5 pb-10">
        <h1 className="text-center text-4xl text-black font-bold mb-3">
          Login
        </h1>
        <form
          onSubmit={handleSubmit(loginOnSubmit)}
          className="w-[75%] mx-auto"
        >
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'provide a valid email',
                },
              })}
              className="input input-bordered w-full max-w-md"
            />

            <label className="label">
              {errors.email?.type === 'required' && (
                <p className="text-red-600 my-2">{errors.email?.message}</p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className="text-red-600 my-2">{errors.email?.message}</p>
              )}
            </label>
          </div>
          {/* Email */}

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="password"
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'password must be 6 characters or longer', // JS only: <p>error message</p> TS only support string
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: 'provide a valid ppassword',
                },
              })}
              className="input input-bordered w-full max-w-md"
            />

            <label className="label">
              {errors.password?.type === 'minLength' && (
                <p className="text-red-600 my-2">{errors.password?.message}</p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-600 my-2">{errors.password?.message}</p>
              )}
            </label>

            {/* Forgot password */}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {/* Forgot password */}
          </div>
          {/* Password */}

          <div className="form-control ">
            <button type="submit" className="btn btn-primary max-w-md">
              Login
            </button>
          </div>
        </form>
        <p className="text-black mt-3 text-center">
          Do not have an account
          <Link
            className="text-green-600 font-bold "
            to="/signup"
            onClick={navigateSignup}
          >
            Please Signup
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
      {/* form-right */}

    </div>
  );
};

export default Login;
