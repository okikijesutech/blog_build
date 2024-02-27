import { useState } from "react";
import "./publish.css";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Publish = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { accessToken } = useAuth();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/publish", {
        title,
        content,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.status);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h1>Publish an article </h1>
      <div className='publishContainer'>
        <form
          action=''
          onSubmit={handleSubmit}
          className='publishContainerForm'
        >
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='content'>Content </label>
          <textarea
            name='content'
            id='content' // cols='30' rows='10'
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button>{isLoading ? " " : "Publish Article"}</button>
        </form>
      </div>
      <button>
        <a href='/'> Go Home</a>
      </button>
    </div>
  );
};

export default Publish;
