import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/", {
        name: name,
        email: email,
        password: password,
      });
      console.log(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign up</h1>
      <div>
        <form action='' className='form' onSubmit={handleSubmit}>
          <label htmlFor=''>Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)} />
          <label htmlFor=''>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor=''>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' disabled={isLoading}>
            {isLoading ? " " : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
