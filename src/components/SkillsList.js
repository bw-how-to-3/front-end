import React, { useContext, useEffect, useState } from "react";
import { HowToContext } from "../contexts/HowToContext";
import { Link, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import HowToCard from "./HowToCard";
import styled from "styled-components";

const ButtonStyle = styled.button`
  /* display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s; */
`;

const SkillsList = () => {
  const { skills } = useContext(HowToContext);
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
    <div className="skillslist">
      {skills.map((skill) => (
        <HowToCard skill={skill} key={skill.id} />
      ))}
      <Link to="/how-to-form">Add a new skill!</Link>
      <ButtonStyle onClick={() => push("/update-how-to")}>edit</ButtonStyle>
      <ButtonStyle onChange={deleteSkill}>delete</ButtonStyle>
    </div>
  );
};

export default SkillsList;
