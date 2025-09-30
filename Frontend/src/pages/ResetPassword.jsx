// import React, { useState, useEffect } from "react";
// import API from "../api/api";
// import { useLocation, useNavigate } from "react-router-dom";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// export default function ResetPassword(){
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const query = useQuery();
//   const navigate = useNavigate();
//   const token = query.get("token");
//   const email = query.get("email");

//   const submit = async e => {
//     e.preventDefault();
//     try {
//       const { data } = await API.post("/auth/reset-password", { token, email, password });
//       setMsg(data.message || "Password updated");
//       setTimeout(() => navigate("/login"), 1500);
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Error");
//     }
//   };

//   useEffect(() => {
//     if (!token || !email) setMsg("Invalid reset link");
//   }, [token, email]);

//   return (
//     <div>
//       <h2>Reset Password</h2>
//       <form onSubmit={submit}>
//         <input value={password} onChange={e => setPassword(e.target.value)} placeholder="New password" type="password" required />
//         <button type="submit">Reset password</button>
//       </form>
//       {msg && <p>{msg}</p>}
//     </div>
//   );
// }

import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
