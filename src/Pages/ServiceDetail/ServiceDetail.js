import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseServiceDetail from '../../hooks/UseServiceDetail';
import './ServiceDetail.css' 
const ServiceDetail = () => {
  const { serviceId } = useParams();
  
 const [service, setService] = UseServiceDetail(serviceId);


    return (
      <div className=" mt-5">
        <h1 className="text-center">{serviceId}</h1>
        <p className="text-center">Detail about {service.name} Service </p>

        <div className=" w-50 mx-auto detailCards mt-5 mb-5">
          <div className=" detailCard card mx-auto border p-3">
            <img src={service.img} alt="" />
            <div className="detailContent text-center">
              <h2 className="mt-4">Name : {service.name}</h2>
              <p>{service.description}</p>
              <h3>price : ${service.price}</h3>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to={`/checkout/${serviceId}`}>
            <button className="btn btn-info">Checkout</button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceDetail;