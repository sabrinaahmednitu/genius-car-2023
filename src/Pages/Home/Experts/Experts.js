import React from 'react';
import './Experts.css';
import expert1 from '../../../imags/experts/expert-1.jpg'
import expert2 from '../../../imags/experts/expert-2.jpg'
import expert3 from '../../../imags/experts/expert-3.jpg'
import expert4 from '../../../imags/experts/expert-4.jpg'
import expert5 from '../../../imags/experts/expert-5.jpg'
import expert6 from '../../../imags/experts/expert-6.png'
import Expert from '../Expert/Expert';



const experts = [
  { id: 1, name: 'Amir haniya', img: expert1 },
  { id: 2, name: 'Mir aira', img: expert2 },
  { id: 3, name: 'Adam Rock', img: expert3 },
  { id: 4, name: 'jhonson', img: expert4 },
  { id: 5, name: 'will smith ', img: expert5 },
  { id: 6, name: 'Abu hena', img: expert6 },
]
const Experts = () => {
  return (
    <div style={{ backgroundColor: '#f1f1f1' }}>
      <div className="container pt-5 pb-5">
        <h2 className="text-center">Our Experts</h2>
        <div className="row experts">
          {experts.map((expert) => (
            <Expert expert={expert} key={expert.id}></Expert>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;