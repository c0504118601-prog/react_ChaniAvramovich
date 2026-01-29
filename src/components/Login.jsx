import React, { useState, useContext } from 'react';
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email });
    alert("פרטי המשתמש נשמרו!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", direction: "rtl" }}>
      <div>
        <label>שם:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>מייל:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">שמור</button>
    </form>
  );
};

export default Login;
