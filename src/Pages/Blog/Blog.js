import React from 'react';
import blog from '../../imags/blog.jpg';
import './Blog.css'

const Blog = () => {
    return (
      <div className="mt-5 mb-5">
        <div className=" container blogmain">
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
          <div>
            <img className="blogimg" src={blog} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Blog;
