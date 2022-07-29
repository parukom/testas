import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="mainRegisterDiv">
      <form>
        <h1>Register</h1>
        <label htmlFor="username">Enter username</label> <br />
        <input type="text" name="username" placeholder="someUser69" /> <br />
        <label htmlFor="email">Enter your email</label> <br />
        <input type="email" name="email" placeholder="some@mail.com" /> <br />
        <label htmlFor="password">Enter </label> <br />
        <input
          type="password"
          name="password"
          placeholder="some real password"
        />{" "}
        <br />
        <button type="submit">Sign me up</button>
      </form>
    </div>
  );
}

export default Register;
