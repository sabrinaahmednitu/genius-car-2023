import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
      <div className='container'>
        <h3>detail : {serviceId} </h3>
      </div>
    );
};

export default ServiceDetail;