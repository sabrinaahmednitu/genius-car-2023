/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

  const navigateSignup = () => {
    navigate('/registration');
  };

  const loginOnSubmit = async (data) => {
    console.log('this is data',data);

    try {
      const result = await logIn(data?.email, data?.password);
      // console.log(result);
      const accessToken = result?.user?.accessToken;
      console.log(accessToken)
       localStorage.setItem('accesstoken', accessToken);
      // Assuming you want to use the accessToken from the result
      // for the authorization header
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem(accessToken)}`,
        },
        body: JSON.stringify({ email: data?.email }),
      });
     
      const ndata = await response.json();
      console.log('what is this', ndata);
     
       navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }

    // alert('Thank you !!!', 'Successfully login');
   
  };


  // for login
  // const loginOnSubmit =(data) => {
  //   console.log(data);
  //   logIn(data?.email, data?.password)
     
  //     .then((result) => {
  //       console.log(result);
  //       // const accessToken = user?.accessToken;
  //       // localStorage.setItem('accesstoken', accessToken);  
       
  //       //  fetch('http://localhost:5000/login', {
  //       //    method: 'POST',
  //       //    headers: {
  //       //      'content-type': 'application/json',
  //       //      authorization: `Bearer ${localStorage.getItem(accessToken)}`,
  //       //    },
  //       //    body: JSON.stringify(user?.auth?.email),
  //       //  })
  //       //    .then((res) => res.json())
  //       //    .then((ndata) => console.log('what is this', ndata));    
  //     //   alert(' Thank you !!!', 'Successfully login');
  //        navigate('/');
  //      })

  //      .catch((error) => console.log(error));
  // };

  return (
    <div className="w-50 mx-auto">
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
              className="w-100"
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
          <br />
          {/* Password */}
          <div>
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
              className="w-100"
            />

            <label className="label">
              {errors.password?.type === 'minLength' && (
                <p className="text-red-600 my-2">{errors.password?.message}</p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-600 my-2">{errors.password?.message}</p>
              )}
            </label>
          </div>
          {/* Password */}

          {/* Forgot password */}
          <label className="label mb-2 mt-2">
            <a href="#">Forgot password?</a>
          </label>
          {/* Forgot password */}

          <div>
            <button type="submit" className="btn btn-primary d-block w-75 mx-auto">
              Login
            </button>
          </div>
        </form>
        <p className="text-black mt-3 text-center">
          Do not have an account? <Link
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
