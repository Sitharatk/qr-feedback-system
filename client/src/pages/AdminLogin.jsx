import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(`Error logging in: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
    <form 
      onSubmit={handleLogin} 
      className="w-full max-w-sm p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl space-y-6 border border-white/30"
    >
      <h2 className="text-3xl font-bold text-center text-black drop-shadow-md">Admin Login</h2>

      {error && <p className="text-red-800 text-center">{error}</p>}

      <div className="space-y-4">
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white/30 text-black placeholder-white/70"
          required 
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white/30 text-black placeholder-white/70"
          required 
        />
      </div>

      <button 
        type="submit" 
        className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold rounded-lg"
      >
        Login
      </button>
    </form>
  </div>
);
}

export default AdminLogin;