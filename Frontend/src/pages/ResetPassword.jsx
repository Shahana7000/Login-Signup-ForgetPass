import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      alert("Please enter your new password");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:5000/api/auth/reset-password", {
        token,
        email,
        password,
      });

      alert(data.message);
      navigate("/"); // redirect to login after success
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="login-card">
      <h2 className="heading">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-required"
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="inputBox"
        />
        <br/><br/>
        <Button type="submit" disabled={loading} className="login-btn"
            variant="contained"
            color="success">
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
      </div>
    </div>
  );
};

export default ResetPassword;
