import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseServiceDetail from '../../hooks/UseServiceDetail';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
 const [service, setService] = UseServiceDetail(serviceId);


    return (
      <div className=" mt-5">
        <h3 className="text-center">Detail about Service : {service.name} </h3>
        <div className="text-center">
          <Link to={`/checkout/${serviceId}`}>
            <button className="btn btn-info">Checkout</button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceDetail;