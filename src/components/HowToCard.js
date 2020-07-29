import React, { useContext, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { HowToContext } from "../contexts/HowToContext";
import { Route, useHistory } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border: 1px solid #383d3b;
  padding: 3px 5px;
  margin: 5px;
  color: #383d3b;
  border-radius: 2px;
  background-color: #ff934f;
  &:hover {
    background-color: #383d3b;
    color: #ff934f;
  }
`;

const HowToCard = (props) => {
  const { title, body } = props.skill;
  const { push } = useHistory();

  const deleteSkill = () => {
    axiosWithAuth()
      .delete(``)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <h2>Title: {title}</h2>
      </div>
      <div>
        <p>How to: {body}</p>
      </div>

      <ButtonStyle onClick={() => push("/update-form")}>Edit</ButtonStyle>
      <ButtonStyle onChange={deleteSkill}>Delete</ButtonStyle>
    </div>
  );
};

export default HowToCard;
