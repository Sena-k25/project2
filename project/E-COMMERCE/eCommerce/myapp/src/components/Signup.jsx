
import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "user" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("API URL:", import.meta.env.VITE_API_URL);
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, formData);
    alert("User registered!");
};

  return (
      <div>
        <br /><br /><br /><br /><br />
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit">Signup</button>
        </form>
          
          
    </div>
  )
}

export default Signup