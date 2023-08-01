import React from 'react';
import { useParams } from 'react-router-dom';
import UseServiceDetail from '../../hooks/UseServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';



const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = UseServiceDetail(serviceId);
  const [user] = useAuthState(auth);
 

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    }
    // Send a POST request
    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast('Your order is booked ! ')
          event.target.reset();
        }
    })
  }

    return (
      <div className="w-50 mx-auto mt-5">
        <div className="text-center">
          <h2>please checkout for {service.name} </h2>
          <form
            onSubmit={handlePlaceOrder}
            className="d-flex flex-column gap-4"
            action=""
          >
            <img
              style={{
                width: '45px',
                borderRadius: '50%',
                margin: 'auto',
              }}
              src={user.photoURL}
              alt=""
            />
            <input
              type="text"
              name="name"
              value={user?.displayName}
              readOnly
              placeholder="name"
              required
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              disabled
              placeholder="email"
              required
            />
            <input
              type="text"
              name="address"
              autoComplete="off"
              placeholder="address"
              required
            />
            <input
              type="text"
              name="service"
              value={service.name}
              disabled
              placeholder="service"
              required
            />
            <input type="number" name="phone" placeholder="phone" required />
            <input
              className=" btn btn-secondary w-50 mx-auto"
              type="submit"
              value="Place Order"
            />
          </form>
        </div>
      </div>
    );
};

export default Checkout;