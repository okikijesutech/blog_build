import "./blogContainer.css";
import Blog from "../../components/blog/Blog";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get("http://localhost:5000/post", {});
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div className='blogContainer'>
      {blogs.map((blog) => (
        <Blog key={blog} title={blog} img={blog} id={blog} />
      ))}
    </div>
  );
};

export default BlogContainer;
