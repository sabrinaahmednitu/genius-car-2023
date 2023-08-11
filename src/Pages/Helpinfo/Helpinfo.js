import React from 'react';
import './Helpinfo.css'

const Helpinfo = () => {
    return (
      <div>
        <div className="container text-center mt-5">
          <h1>
            What Are You <span style={{ color: 'red' }}>Looking For</span>{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
          <div className="cards">
            <div className="HelpCard">
              <i class="fa fa-camera-retro fa-5x"></i> fa-5x
              <h4>Highly Secured</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus tincidunt.
              </p>
              <a href="#" >
                Read more...
              </a>
            </div>

            <div className="HelpCard">
              <i class="fa fa-camera-retro fa-5x"></i> fa-5x
              <h4>Trusted Agents</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus tincidunt.
              </p>
              <a href="#" >
                Read more...
              </a>
            </div>
            <div className="HelpCard">
              <i class="fa fa-camera-retro fa-5x"></i> fa-5x
              <h4>Get an Offer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus tincidunt.
              </p>
              <a href="#" >
                Read more...
              </a>
            </div>
            <div className="HelpCard">
              <i class="fa fa-camera-retro fa-5x"></i> fa-5x
              <h4>Free Support</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus tincidunt.
              </p>
              <a href="#" >
                Read more...
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Helpinfo;