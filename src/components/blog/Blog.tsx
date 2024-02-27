import React from "react";
import "./blog.css";
interface Blogprops {
  title: string;
  img: string;
  id: string;
}

const Blog: React.FC<Blogprops> = ({ title, img, id }) => {
  return (
    <div className='blog'>
      <div className='blog-img'>
        <img src={img} alt={img} />
      </div>
      <div className='blog-info'>
        <div>
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, et?...
          </p>
        </div>
        <button type='button'>
          <a href={`/post/${id}`}></a>
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
