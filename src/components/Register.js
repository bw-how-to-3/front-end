import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

import { Link } from "react-router-dom";

const Register = (props) => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const newUser = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://heftyb-how-to.herokuapp.com/createnewuser",
        `grant_type=password&username=${register.username}&password=${register.password}`,
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
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        props.history.push("/");
      });
  };

  return (
    <div>
      <form onSubmit={newUser}>
        <h4>Lets get started!</h4>
        <h4>Create your account!</h4>

        <input
          type="text"
          name="username"
          placeholder="username"
          value={register.username}
          onChange={handleChanges}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={register.password}
          onChange={handleChanges}
        />
        <button>Next</button>

        <h4>Already have an account? Login Here!</h4>
        <Link to="/login">Log in</Link>
      </form>
    </div>
  );
};

export default Register;
