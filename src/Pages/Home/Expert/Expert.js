
import React from 'react';
import './Expert.css';
const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="">
      <div
        className="card "
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="service-btn"> Booking</button>
        </div>
      </div>
    </div>
  ); 
};

export default Expert;
