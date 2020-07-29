import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "admin",
    password: "password",
  });

  const handleChange = (e) =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://heftyb-how-to.herokuapp.com/login",
        `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:secure")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        props.history.push("/skills-list");
      })
      .catch((err) => {
        console.log(err);
        props.history.push("/");
      });
  };

  return (
    <div className="login">
      <form className="form" onSubmit={login}>
        <h4>Welcome back!</h4>
        <h4>Please Log into your account</h4>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={credentials.username}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <button>Log in</button>

        <h4>Not registered yet? Register Now!</h4>

        <Link to="/Register">Register Here</Link>
      </form>
    </div>
  );
};

export default Login;
