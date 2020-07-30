import React, { useContext } from "react";
import { HowToContext } from "../contexts/HowToContext";
import { Link } from "react-router-dom";
// import axiosWithAuth from "../utils/axiosWithAuth";
import HowToCard from "./HowToCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const SkillsList = () => {
  const { skills } = useContext(HowToContext);

  return (
    <ListContainer>
      {skills.map((skill) => (
        <HowToCard skill={skill} key={skill.id} />
        
      ))}
      
      <Link to="/how-to-form">
        <ButtonStyle>Add a new skill!</ButtonStyle>
      </Link>
    </ListContainer>
  );
};

export default SkillsList;
