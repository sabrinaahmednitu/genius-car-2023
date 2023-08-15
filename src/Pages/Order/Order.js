import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const email = user?.email;
    console.log(email);
    fetch(`http://localhost:5000/order?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div>
      <h1>Your order</h1>
      {orders.map((order, index) => (
        <div key={order._id}>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={order.img} roundedCircle />
                <h3>{order.service}</h3>
                {order.address} <br />
                <h6> {order.email}</h6>
              </Col>
            </Row>
           <button className='btn' style={{backgroundColor:'red',outline:'0',border:'0',color:'white'}}>Delete</button>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default Order;

// {
//           headers: {
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           }
//         }
