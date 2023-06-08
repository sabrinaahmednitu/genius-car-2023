import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
      <div className="service" >
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button className="service-btn">Book : {name}</button>
      </div>
    );
};

export default Service;