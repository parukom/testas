import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="mainLoginDiv">
      <form>
        <h1>Login</h1>
        <label htmlFor="username">Enter username</label> <br />
        <input type="text" name="username" placeholder="someUser69" /> <br />
        <label htmlFor="password">Enter </label> <br />
        <input
          type="password"
          name="password"
          placeholder="your password"
        />{" "}
        <br />
        <button type="submit">Log me in</button>
      </form>
    </div>
  );
}

export default Login;
