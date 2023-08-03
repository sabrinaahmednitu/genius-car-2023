
import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../hooks/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
   const {
     register,
     formState: { errors },
     handleSubmit,
     reset,
  } = useForm();
  
  const { signUp, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const navigateLogin = () => {
    navigate('/login');
  };

  const signupOnSubmit = (data) => {
    console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert(' Thank you !!!', 'Your account has been created');
        reset();
        verifyEmail();

        updateProfile({ displayName: data.name });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  

    return (
      <div className="login-main w-50 mx-auto">
        {/* form-right */}
        <div>
          <h1 className="text-center text-4xl text-black font-bold mb-3">
            Signup
          </h1>
          <form
            onSubmit={handleSubmit(signupOnSubmit)}
            className="w-50 mx-auto"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'name is required',
                  },
                })}
                className=" w-75"
              />

              <label className="label">
                {errors.name?.type === 'required' && (
                  <p className="text-red-600 my-2">{errors.name?.message}</p>
                )}
                {errors.name?.type === 'pattern' && (
                  <p className="text-red-600 my-2">{errors.name?.message}</p>
                )}
              </label>
            </div>
            {/* Name */}

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
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
                className=" w-75"
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
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'password must be 6 characters or longer', // JS only: <p>error message</p> TS only support string
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: 'provide a valid password',
                  },
                })}
                className=" w-75"
              />

              <label className="label">
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600 my-2">
                    {errors.password?.message}
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600 my-2">
                    {errors.password?.message}
                  </p>
                )}
              </label>

              {/* Forgot password */}
              <label className="label">
                <span className="label-text">
                  Forget Password ?
                  <button className="btn btn-link">Reset</button>
                </span>
              </label>
              {/* Forgot password */}
            </div>
            {/* Password */}

            <div>
              <button
                type="submit"
                className="btn btn-primary w-50 "
              >
                sign Up
              </button>
            </div>
          </form>
          <p className="text-black mt-2 text-center">
            Already have an account
            <Link
              className="text-green-600 font-bold"
              to="/login"
              onClick={navigateLogin}
            >
              Please Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default Registration;