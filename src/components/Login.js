import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://railway-management-backend.onrender.com/api/login", {
        username,
        password,
      });

      if (response.data.status_code === 200) {
        // Save token to local storage
        localStorage.setItem("token", response.data.access_token);
        setMessage("Login successful");
        // Redirect to user dashboard
        navigate("/user-dashboard");
      } else {
        setMessage("Incorrect username/password provided. Please retry");
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
