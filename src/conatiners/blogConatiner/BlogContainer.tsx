import "./blogContainer.css";
import Blog from "../../components/blog/Blog";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";
import Blog4 from "../../assets/blog4.png";

const blogs = [
  {
    title: "Hello world",
    id: "1",
    img: Blog1,
  },
  {
    title: "Hello Nigeria",
    id: "2",
    img: Blog2,
  },
  {
    title: "Hello America",
    id: "3",
    img: Blog3,
  },
  {
    title: "Hello Signapore",
    id: "4",
    img: Blog4,
  },
];

const BlogContainer = () => {
  return (
    <div className='blogContainer'>
      {blogs.map((blog) => (
        <Blog key={blog.id} title={blog.title} img={blog.img} />
      ))}
    </div>
  );
};

export default BlogContainer;
