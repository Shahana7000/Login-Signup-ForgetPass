import React, { useEffect, useState } from "react";
import API from "../api/api";
import { clearToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await API.get("/auth/me");
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  const logout = () => {
    clearToken();
    nav("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <>
        <p>Welcome, {user.name}</p>
        <p>{user.email}</p>
        <button onClick={logout}>Logout</button>
      </> : <p>Loading...</p>}
    </div>
  );
}
