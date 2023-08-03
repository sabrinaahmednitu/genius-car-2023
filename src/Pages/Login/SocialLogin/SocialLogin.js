import React from 'react';
import google from '../../../imags/google4.png'
import facebook from '../../../imags/facebook.png'
import github from '../../../imags/unnamed.png';

import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user,loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, user1,loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
   const location = useLocation();
   let from = location.state?.from?.pathname || '/';
  
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>
  }

  if (error || error1) {
    errorElement =  <p className="text-danger"> Error : {error?.message} {error1?.message}
        </p>
     
 
  }

  if (user || user1) {
    navigate(from,{replace:true});
    }




  return (
    <div className="container w-50 mx-auto">
      <div className=" d-flex align-items-center">
        <div style={{ height: '1px' }} className="bg-info w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: '1px' }} className="bg-info w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="w-100 bg-black"
          style={{
            outline: 'none',
            border: 'none',
            padding: '7px',
            borderRadius: '5px',
            color: 'white',
          }}
        >
          <img src={google} alt="" /> Google Sign In
        </button>
        <button
          className="w-100 bg-black mt-3"
          style={{
            outline: 'none',
            border: 'none',
            padding: '7px',
            borderRadius: '5px',
            color: 'white',
          }}
        >
          <img
            src={facebook}
            style={{ width: '25px', marginRight: '3px' }}
            alt=""
          />{' '}
          Facebook Sign In
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="w-100 bg-black mt-3"
          style={{
            outline: 'none',
            border: 'none',
            padding: '7px',
            borderRadius: '5px',
            color: 'white',
          }}
        >
          <img
            src={github}
            style={{ width: '30px', borderRadius: '50%' }}
            alt=""
          />{' '}
          GitHub Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
