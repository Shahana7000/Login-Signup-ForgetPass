import React, { useState } from "react";
import API from "../api/api";
import { setToken } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../App.css';

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

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
    <div className="main-container">
      <div className="login-card">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            className="inputBox"
            id="outlined-required"
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
          <br/><br/>
          <TextField
            className="inputBox"
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <br/>
          <br/>
          <Button
            className="login-btn"
            type="submit"
            variant="contained"
            color="success"
          >
            LOGIN
          </Button>
          <br/><br/>
        </form>
        <Link to="/forgot-password">Forgot password?</Link>
        <br/>
        <Link to="/signup">Don't have account</Link>
        {err && <p style={{ color: "red" }}>{err}</p>}
      </div>
    </div>
  );
}
