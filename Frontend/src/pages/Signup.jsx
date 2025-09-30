import React, { useState } from "react";
import API from "../api/api";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/register", form);
      setToken(data.token);
      navigate("/");
    } catch (error) {
      setErr(error.response?.data?.message || "Error");
    }
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button type="submit">Sign up</button>
      </form>
      {err && <p>{err}</p>}
    </div>
  );
}
