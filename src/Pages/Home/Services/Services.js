import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  
  const [services] = useServices();

    return (
      <div id='services' className="container mt-5 mb-5">
        <div className="row">
          <h1 className="services-title mb-5 text-center"> Our Services</h1>
          <div className="services-container">
            {services.map((service) => (
              <Service service={service} key={service._id}></Service>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Services;