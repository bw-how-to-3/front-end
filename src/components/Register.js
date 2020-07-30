import React, { useState } from "react";
// import axiosWithAuth from "../utils/axiosWithAuth";
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
      .post("https://heftyb-how-to.herokuapp.com/createnewuser", register, {
        headers: {
          "Content-Type": "application/json",
        },
      })
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
        <div className='uk-section uk-section-small'>
          <div className="uk-container uk-flex uk-flex-center">
            <form onSubmit={newUser} className='uk-card uk-card-secondary uk-card-body'>
            <h4>Lets get started!</h4>
            <h4>Create your account!</h4>
            <div className='uk-margin'>
            <input
            className='uk-input'
            type='text'
            name='username'
            placeholder='username'
            value={register.username}
            onChange={handleChanges}
            />
            </div>

            <div className='uk-margin'>
            <input
            className='uk-input'
            type='password'
            name='password'
            placeholder='password'
            value={register.password}
            onChange={handleChanges}
            />
            </div>
            <div className='uk-margin'>
                <button className='uk-button uk-button-default uk-width-1-1'>Next</button>
            </div>
            <h4>Already have an account? <Link to='/login'>Log in</Link></h4>
            
            </form>
        </div>
      </div>    
    )
}
export default Register

