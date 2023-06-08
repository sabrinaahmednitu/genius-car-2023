import React from 'react';

const Service = ({ service }) => {
    const { id, img, name, price, description } = service;
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Service;