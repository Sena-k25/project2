import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formData);
      alert("Login successful!");
      localStorage.setItem("token", response.data.token);
      console.log(response.data); // Handle authentication (e.g., save token, redirect)
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials, try again.");
    }
  };

  return (
      <div>
        <br /><br /><br /><br /><br />
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email"  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <button type="submit">Login</button>
        </form> 
          
          

          
          
    </div>
  )
}

export default Login