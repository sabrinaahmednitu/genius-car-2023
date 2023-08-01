import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  

  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then(res => res.json())
    .then(data=>setService(data))
  },[])

    return (
      <div className=" mt-5">
        <h3 className='text-center' >Detail about Service : {service.name} </h3>
        <div className='text-center' >
          <Link to="/checkout">
            <button className="btn btn-info">Checkout</button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceDetail;