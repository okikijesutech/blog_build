import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      const { accessToken, refreshToken } = response.data;
      setAuthTokens(accessToken);
      navigate("/publish");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <form action='' className='form' onSubmit={handleSubmit}>
          <label htmlFor=''>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor=''>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>{isLoading ? " " : "Sign in"}</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
