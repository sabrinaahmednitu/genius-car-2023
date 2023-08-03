import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserOrders from '../UserOrders/UserOrders';

const Order = () => {
    const [user] = useAuthState(auth);
    
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const email = user?.email;
        console.log(email);
      fetch(`http://localhost:5000/order?email=${email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [user])
    return (
      <div>
        <h1>Your order</h1>
        {orders.map((order) => (
            <div key={order._id}>
                <h3>{order.service}</h3>
          </div>
        ))}
      </div>
    );
};

export default Order;