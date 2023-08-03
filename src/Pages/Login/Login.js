/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin/SocialLogin';
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
    navigate('/registration');
  };

  //  for login
  const loginOnSubmit = (data) => {
    console.log(data);
     logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const useremail = user.email;
        console.log(useremail);
        console.log(user); 
      
        localStorage.setItem('acessToken', user.accessToken)
        
        fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(useremail),
        })
          .then((res) => res.json())
          .then((usertoken) => console.log('usertoken', usertoken));
         
        alert(' Thank you !!!', 'Successfully login');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container w-50 m-auto">
      <h2 className="text-center mt-5 mb-5">Please Login</h2>
      {/* form-right */}
      <div>
        <form onSubmit={handleSubmit(loginOnSubmit)} className="w-50 mx-auto">
          {/* Email */}
          <div>
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
                  message: 'use capital letter, special character  and number',
                },
              })}
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
              <a href="#">Forgot password?</a>
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
            to="/registration"
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
