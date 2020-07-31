import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { HowToContext } from "../contexts/HowToContext";
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
  padding: 6px;
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

const UpdateForm = (props) => {
  const { id } = useParams();
  const { push } = useHistory();

  const [skill, setSkill] = useState({
    title: "",
    body: "",
  });

  const handleChanges = (e) => {
    e.persist();
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    axiosWithAuth()
      .put(`/posts/post/${id}`, skill)
      .then((res) => {
        console.log(res);
        push(`/skills-list/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <DivContainer>
      <Content>
        <Title>Update your How-To</Title>
        <form onSubmit={handleSubmit}>
          <FirstInput
            type="text"
            name="title"
            onChange={handleChanges}
            value={skill.title}
            placeholder="Title..."
          />
          <br />
          <BodyInput
            name="body"
            value={skill.body}
            onChange={handleChanges}
            placeholder="Description..."
          />
          <br />
          <ButtonStyle>Update</ButtonStyle>
        </form>
      </Content>
    </DivContainer>
  );
};

export default UpdateForm;
