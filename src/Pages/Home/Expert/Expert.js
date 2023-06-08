import React from 'react';
import './Expert.css';
const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 g-5">
      <div class="card " style={{ width: '18rem', margin: 'auto' }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button class="service-btn"> Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
