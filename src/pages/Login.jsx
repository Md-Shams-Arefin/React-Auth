import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/v1/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  const token = localStorage.getItem("token");

  return (
    <div className="login">
      {token ? (
        <>{(window.location.href = "/dashboard")}</>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="login_form">
            <label>
              Email :
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <br />
            <label>
              Password :
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
