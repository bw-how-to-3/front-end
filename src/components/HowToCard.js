import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
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

const CardDiv = styled.div`
  width: 300px;
  margin: 20px;
  background-color: #383d3b;
  border-radius: 3px;
  padding: 30px;
  /* margin: 0 auto; */
`;

const Title = styled.h2`
  color: #9cf6f6;
`;

const Text = styled.p`
  color: #9cf6f6;
`;

const HowToCard = (props) => {
  const { title, body } = props.skill;
  const { push } = useHistory();

  const deleteSkill = () => {
    axiosWithAuth()
      .delete(`/posts/post/${props.skill.postid}`)
      .then((res) => {
        push("/skills-list");
        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <CardDiv>
      <div>
        <Title>Title: {title}</Title>
      </div>
      <div>
        <Text>How to: {body}</Text>
      </div>

      <ButtonStyle onClick={() => push(`/update-form/${props.skill.postid}`)}>
        Edit
      </ButtonStyle>
      <ButtonStyle onClick={deleteSkill}>Delete</ButtonStyle>
    </CardDiv>
  );
};

export default HowToCard;
