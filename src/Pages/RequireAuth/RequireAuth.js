import React from 'react';
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import { toast} from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  if (!user.emailVerified) {
    return (
      <div className="w-50 mx-auto mt-5 text-center">
        <h3 className="text-danger">Your Email not verified !!</h3>
        <h5 className="text-success">Please verify your email address</h5>
        <button
          className="btn btn-success mt-3"
          onClick={async () => {
            const success = await sendEmailVerification();
            if (success) {
              toast('Sent email');
            }
          }}
        >
          Send Verification Email Again
        </button>
      
      </div>
    );
  }

  return children;
};

export default RequireAuth;
