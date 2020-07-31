import React, { useContext, useState } from "react";
import { HowToContext } from "../contexts/HowToContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border: 1px solid #383d3b;
  padding: 3px 5px;
  margin: 5px;
  color: #383d3b;
  border-radius: 2px;
  background-color: #ff934f;
  margin-bottom: 20px;
  &:hover {
    background-color: #383d3b;
    color: #ff934f;
  }
`;

const DivContainer = styled.div`
  padding-top: 40px;
  background-color: #eee5e9;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: #383d3b;
`;

const Title = styled.h2`
  color: #9cf6f6;
`;

const FirstInput = styled.input`
  max-width: 200px;
  width: 100%;
  margin: 30px;
  border: 2px solid #eee5e9;
  background-color: #383d3b;
  color: #9cf6f6;
  padding: 3px;
  &::placeholder {
    color: #eee5e9;
  }
  &:hover {
    border: 2px solid #ff934f;
  }
`;

const BodyInput = styled.textarea`
  max-width: 300px;
  width: 100%;
  height: 300px;
  border: 2px solid #eee5e9;
  background-color: #383d3b;
  color: #9cf6f6;
  padding: 3px;
  &::placeholder {
    color: #eee5e9;
  }
  &:hover {
    border: 2px solid #ff934f;
  }
`;

const HowToForm = () => {
  const [newSkill, setNewSkill] = useState({
    title: "",
    body: "",
  });
  const { addSkill } = useContext(HowToContext);
  const { push } = useHistory();

  const handleChanges = (e) => {
    e.persist();
    setNewSkill({
      ...newSkill,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill(newSkill);
    push("/skills-list");
    window.location.reload(false);
  };

  return (
    <DivContainer>
      <Content>
        <Title>What would you like to add?</Title>
        <form onSubmit={handleSubmit}>
          <FirstInput
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChanges}
            value={newSkill.title}
          />
          <br />
          <BodyInput
            name="body"
            value={newSkill.body}
            placeholder="description"
            onChange={handleChanges}
          />
          <br />
          <ButtonStyle>Add Skill</ButtonStyle>
        </form>
      </Content>
    </DivContainer>
  );
};

export default HowToForm;
