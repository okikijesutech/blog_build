import { useEffect, useState } from "react";
import "./post.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  // useEffect(() => {
  //  const response = axios.get(`http://localhost/5000/post/${id}`);
  //  setPost(response)
  // }, []);
  useEffect(() => {
    fetch(`http://localhost/5000/post/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [post]);
  return (
    <div>
      <h1>Title{post.id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam
        doloribus quae quidem, quis reprehenderit aspernatur odio molestiae quo
        fugiat ipsam non nulla ex, beatae amet, dicta quam nisi eius? Voluptatem
        distinctio rerum incidunt dicta commodi ex quos! Illo, possimus mollitia
        quis earum omnis dicta.
      </p>
    </div>
  );
};

export default Post;
