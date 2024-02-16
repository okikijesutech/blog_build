import "./blog.css";
interface Blog {
  title: string;
  img: String;
}

const Blog = ({ title, img }) => {
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
        <button type='button'>Read More</button>
      </div>
    </div>
  );
};

export default Blog;
