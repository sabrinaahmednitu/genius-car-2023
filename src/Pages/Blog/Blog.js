import React from 'react';
import blog from '../../imags/blog.jpg';

const Blog = () => {
    return (
      <div>
        <div className=" container d-flex justify-content-center align-items-center">
          <div>
            {' '}
            <img className='w-full' src={blog} alt="" />
          </div>
          <div className="p-5">
            <h1>Why Clients Love Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              everLorem industry's standard dummy text everLorem Ipsum Lorem
              Ipsum is simply dummy text of the printing. as been the industry
            </p>
            <img src="" alt="" />
            <h3>Carolyn Stone</h3>
            <p>CEO, Brick Consulting</p>
          </div>
        </div>
      </div>
    );
};

export default Blog;
