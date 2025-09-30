import React, { useState } from "react";
import API from "../api/api";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ForgotPassword(){
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async e => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/forgot-password", { email });
      setMsg(data.message || "If email exists, reset link sent.");
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="main-container">
      <div className="login-card">
      <h2 className="heading">Forgot Password</h2>
      <form onSubmit={submit}>
        <TextField value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required id="outlined-required" className="inputBox"/>
          <br/><br/>

        <Button type="submit" className="login-btn"
            variant="contained"
            color="success">
        Send reset link</Button>
        <br/>
      </form>
      {msg && <p className="heading">{msg}</p>}
      </div>
    </div>
  );
}
