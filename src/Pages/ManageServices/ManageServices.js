import React from 'react';
import useServices from '../../hooks/useServices';
import './ManageService.css'

const ManageServices = () => {
    const [services] = useServices();
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            
        }
    }
    return (
      <div>
        <h2>Manage your services</h2>
        {services.map((service) => (
          <div
            key={service._id}
            className="d-flex justify-contect-center align-items-center gap-5 mx-auto mb-3 w-75 mservice"
          >
            <img
              style={{
                width: '145px',
                borderRadius: '20px'
              }}
              src={service.img}
              alt=""
            />
            <div className="sercive-content mb-4">
              <h4>{service.name}</h4>
              <h6>${service.price}</h6>
              <div className="">{service.description.slice(1, 50)}</div>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-secondary">Update</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ManageServices;