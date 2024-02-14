import "./blogContainer.css";
import Blog from "../../components/blog/Blog";

const blogs = [
  {
    title: "Hello world",
    id: "1",
  },
  {
    title: "Hello Nigeria",
    id: "2",
  },
  {
    title: "Hello America",
    id: "3",
  },
  {
    title: "Hello Signapore",
    id: "4",
  },
  {
    title: "Hello Asia",
    id: "5",
  },
];

const BlogContainer = () => {
  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} />
      ))}
    </div>
  );
};

export default BlogContainer;
