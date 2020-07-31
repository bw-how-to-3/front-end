import React, { useContext } from "react";
import { HowToContext } from "../contexts/HowToContext";
import { Link } from "react-router-dom";
// import axiosWithAuth from "../utils/axiosWithAuth";
import HowToCard from "./HowToCard";
import styled from "styled-components";

const ListContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  background-color: #eee5e9;
  height: 100vh;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonStyle = styled.button`
  border: 1px solid #383d3b;
  padding: 3px 5px;
  margin: 5px;
  color: #ff934f;
  border-radius: 2px;
  background-color: #383d3b;
  &:hover {
    background-color: #ff934f;
    color: #383d3b;
  }
`;

const SkillsList = () => {
  const { skills } = useContext(HowToContext);

  return (
    <ListContainer>
      <div>
        <h1>How-To's</h1>
        <Link to="/how-to-form">
          <ButtonStyle>Add a new skill!</ButtonStyle>
        </Link>
      </div>
      <List>
        {skills.map((skill) => (
          <HowToCard skill={skill} key={skill.id} />
        ))}
      </List>
    </ListContainer>
  );
};

export default SkillsList;
