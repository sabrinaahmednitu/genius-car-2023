import React from 'react';
import './NotFound.css';
import errorImg from '../../../imags/404 (2).jpg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const ToHome = useNavigate();
    const NavigateToHome=()=> {
        ToHome('/home');
    }
    return (
      <div className="error-section ">
        <div className=" error1 ">
          <h1>ERROR FOUND !</h1>
          <button className="error-btn" onClick={NavigateToHome}>
            Go Home
          </button>
        </div>
        <div className=" error2 ">
          <img src={errorImg} alt="" />
        </div>
      </div>
    );
};

export default NotFound;