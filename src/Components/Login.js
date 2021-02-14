import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input Username"
          onChange={handleChange}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
