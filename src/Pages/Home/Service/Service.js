import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { _id, img, name, price, description } = service;

  const Navigate = useNavigate();


  //mogodb theke ana datar id amra onclick e perameter hisab e pathaiche ,tarpor oi perameter k Sid nam e receive korchi
  const NavigateToServiceDetail = Sid => {
    Navigate(`/service/${Sid}`);
  }


  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button className="service-btn" onClick={()=>{NavigateToServiceDetail(_id)}} >Book : {name}</button>
    </div>
  );
};

export default Service;
