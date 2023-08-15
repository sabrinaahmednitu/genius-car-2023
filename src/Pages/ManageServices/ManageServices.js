import React from 'react';
import useServices from '../../hooks/useServices';
import './ManageService.css'

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            fetch(`http://localhost:5000/services/${id}`, {
                method:'DELETE'
            })
              .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining=services.filter(service=> service._id !== id )
                   setServices(remaining)
                })
        }
    }
  return (
    <div>
      <div className="manageServiceMain">
        <h2>Manage your services</h2>
        {services.map((service) => (
          <div
            key={service._id}
            className=" mb-3 mservice"
          >
            <img
              style={{
                width: '245px',
                borderRadius: '20px',
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
              <button
                onClick={() => handleDelete(service._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;