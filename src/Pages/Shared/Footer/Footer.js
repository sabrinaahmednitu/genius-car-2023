import React from 'react';
import './Footer.css';
import iconimg from '../../../imags/logo-black.png';

const Footer = () => {
  return (
    <footer className=" mt-5 mb-5">
      <div className="footer-main">
        <div className="Footer1">
          <h5>Helpful Links</h5>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </div>

        <div className="Footer1">
          <img src={iconimg} style={{ width: '245px' }} alt="" />
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            esse, neque voluptatum sapiente sunt laborum accusamus explicabo.
          </section>
        </div>

        <div className="Footer1">
          <h5>Contact Info</h5>
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <a href="#">20/F Green Road, Dhanmondi, Dhaka</a>
          </li>
          <li>
            <i class="fa-solid fa-message"></i>
            <a href="">info@themevessel.com</a>
          </li>
          <li>
            <i class="fa-solid fa-phone"></i>
            <a href="">+0477 85X6 552</a>
          </li>
          <li>
            <i class="fa-solid fa-tty"></i>
            <a href="">+0024 85X6 987</a>
          </li>
          <li>
            <i class="fa-solid fa-globe"></i>
            <a href="">carhouse@themevessel.com</a>
          </li>
        </div>

        <div className="Footer1">
          <h5>Email </h5>
          <li>
            <a href="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </a>
          </li>
          <li>
            <input type="email" className="d-block mx-auto w-50 mt-2 " />
            <button
              type="submit"
              className="btn btn-secondary mt-2 d-block mx-auto w-50"
            >
              Submit
            </button>
          </li>
        </div>
      </div>

      <p className="text-center mt-5">
        <small>copyright @ All Right Reserved by Sabrina Ahmed Nitu </small>
      </p>
    </footer>
  );
};

export default Footer;
