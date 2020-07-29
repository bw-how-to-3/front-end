import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import HowToContext from "../contexts/HowToContext";
import styled from "styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #383d3b;
  max-width: 700px;
  margin: 0 auto;
  background-color: #3685b5;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
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

const HowToForm = () => {
  const { push } = useHistory();
  const { id } = useParams();

  const [newSkill, setNewSkill] = useState({
    id: id,
    title: "",
    description: "",
  });

  const handleChanges = (e) => {
    setNewSkill({ ...newSkill, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewSkill(newSkill);
    push("/skills-list");
    window.location.reload(false);
  };

  return (
    <DivContainer>
      <FormContainer onChange={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChanges}
          value={newSkill.title}
        />
        <br></br>
        <textarea
          name="body"
          onChange={handleChanges}
          value={newSkill.body}
          placeholder="Description"
        />
        <br></br>
        <ButtonStyle>Update</ButtonStyle>
      </FormContainer>
    </DivContainer>
  );
};

export default HowToForm;
