import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
      <div className="container mt-5">
        <h3 className='text-center' >Detail about Service : {serviceId} </h3>
        <div className='text-center' >
          <Link to="/checkout">
            <button className="btn btn-info">Checkout</button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceDetail;