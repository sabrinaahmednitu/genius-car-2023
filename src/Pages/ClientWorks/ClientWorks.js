import React from 'react';
import './ClientWorks.css';
import img1 from '../../imags/works/img1.jpg';
import img2 from '../../imags/works/img2.jpg';
import img3 from '../../imags/works/img3.jpg';
import img4 from '../../imags/works/img4.jpg';
import img5 from '../../imags/works/img5.jpg';
import img6 from '../../imags/works/img6.jpg';

const ClientWorks = () => {
  return (
    <div>
      <div className="Works">
        <div className="works-text text-center">
          <h2 style={{ fontWeight: '700' }}>
            These cars are modified by our Experts
          </h2>
          <p>
            We always try to give our best service to you guys.Thanks for trust
            us
          </p>
        </div>

        <div className="container work-images mt-4 mb-4">
          <div className="cars-one">
            <div className="img1">
              <img src={img1}  alt="" />
              <div className="overlay">
                <div className="Wtext">
                  <h3>Modified by Amir haniya</h3>
                </div>
              </div>
            </div>
            <div className="img2">
              <img src={img2}  alt="" />
              <div className="overlay">
                <div className="Wtext">
                  <h3>Mir aira</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cars-one">
            <div className="img1">
              <img src={img3}  alt="" />
              <div className="overlay">
                <div className="Wtext">
                  <h3>Modified by Amir haniya</h3>
                </div>
              </div>
            </div>
            <div className="img2">
              <img src={img4}  alt="" />
              <div className="overlay">
                <div className="Wtext">
                  <h3>Mir aira</h3>
                </div>
              </div>
            </div>
          </div>

         
          <div className="cars-three">
            <div className="img5">
              <img src={img6}  alt="" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ClientWorks;
