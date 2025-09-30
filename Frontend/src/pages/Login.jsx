import React, { useState } from "react";
import API from "../api/api";
import { setToken } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", form);
      setToken(data.token);
      navigate("/");
    } catch (error) {
      setErr(error.response?.data?.message || "Error");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <Link to="/forgot-password">Forgot password?</Link>
      {err && <p>{err}</p>}
    </div>
  );
}
