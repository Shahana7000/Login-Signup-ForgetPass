import React, { useState } from "react";
import API from "../api/api";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    <div className="main-container">
      <div className="login-card">
      <h2 className="heading">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <TextField name="name" placeholder="Name" onChange={handleChange}  id="outlined-required" required className="inputBox "/>
        <br/><br/>
        <TextField name="email" placeholder="Email" onChange={handleChange}  id="outlined-required" required  className="inputBox "/>
        <br/><br/>
        <TextField name="password" placeholder="Password" type="password" onChange={handleChange} id="outlined-password-input" required className="inputBox "/>
        <br/><br/>
        <Button type="submit" className="login-btn"
            variant="contained"
            color="success">Sign up</Button>
      </form>
      {err && <p>{err}</p>}
      </div>
    </div>
  );
}
