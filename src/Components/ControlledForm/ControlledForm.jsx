import React, { useState } from "react";

const ControlledForm = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handleOnChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("password must be 6 character.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" required />
        <br />
        <input
          type="password"
          onChange={handleOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small style={{ color: "red" }}>{error}</small>
      </p>
    </div>
  );
};

export default ControlledForm;
