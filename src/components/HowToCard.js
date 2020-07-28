import React, { useContext, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { HowToContext } from "../contexts/HowToContext";
import { Route, useHistory } from "react-router-dom";

const HowToCard = (props) => {
  const { title, body } = props.skill;
  return (
    <div>
      <div>
        <h2>Title: {title}</h2>
      </div>
      <div>
        <p>How to: {body}</p>
      </div>
    </div>
  );
};

export default HowToCard;
