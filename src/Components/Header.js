import React from "react";

function Header({ user, setUser }) {
  const handleLogOut = () => {
    setUser("");
  };
  return (
    <div>
      <h1>Welcome, {user}</h1>
      <button onClick={handleLogOut}>Log-Out</button>
    </div>
  );
}

export default Header;
