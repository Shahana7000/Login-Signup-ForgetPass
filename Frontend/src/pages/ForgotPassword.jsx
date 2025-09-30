import React, { useState } from "react";
import API from "../api/api";

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
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={submit}>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <button type="submit">Send reset link</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
