import React from 'react';
import google from '../../../imags/google4.png'
import facebook from '../../../imags/facebook.png'
import github from '../../../imags/unnamed.png'

const SocialLogin = () => {
  return (
    <div className="container">
      <div className=" d-flex align-items-center">
        <div style={{ height: '1px' }} className="bg-info w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: '1px' }} className="bg-info w-50"></div>
      </div>
      <div>
        <button
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
            style={{ width: '25px' ,marginRight:"5px" }}
            alt=""
          />{' '}
          Facebook Sign In
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