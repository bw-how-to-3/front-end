<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
=======
import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
>>>>>>> 68aee4f4746640b1fcaadfb43904b98e561375d0

import { Link } from "react-router-dom";

const Register = (props) => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

<<<<<<< HEAD
  const handleChanges = (e) => {
    e.persist();
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
=======
    const sumbitForm = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('', register)
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.payload)
            props.history.push('/login')
        })
        .catch(error => {
            console.log(error)
            props.history.push('/')
        })
    }   
>>>>>>> 68aee4f4746640b1fcaadfb43904b98e561375d0

  const sumbitForm = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("", register)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        props.history.push("/");
      });
  };

  return (
    <div>
      <form onSubmit={sumbitForm}>
        <h4>Lets get started!</h4>
        <h4>Create your account!</h4>

<<<<<<< HEAD
        <input
          type="text"
          name="username"
          placeholder="username"
          value={register.username}
          onChange={handleChanges}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={register.email}
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
=======
            <h4>Already have an account? Login Here!</h4>
            <Link to='/login'>Log in</Link>
            </form>
        </div>
    )
>>>>>>> 68aee4f4746640b1fcaadfb43904b98e561375d0

        <h4>Already have an account? Login Here!</h4>
        <Link to="/login">Log in</Link>
      </form>
    </div>
  );
};

export default Register;
