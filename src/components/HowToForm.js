import React, { useContext, useState } from "react";
import { HowToContext } from "../contexts/HowToContext";
import { useHistory } from "react-router-dom";
// import styled from "styled-components";

// const DivContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 2px solid #383d3b;
//   max-width: 700px;
//   margin: 0 auto;
//   background-color: #3685b5;
// `;

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 20px;
// `;

// const ButtonStyle = styled.button`
//   border: 1px solid #383d3b;
//   padding: 3px 5px;
//   margin: 5px;
//   color: #383d3b;
//   border-radius: 2px;
//   background-color: #ff934f;
//   &:hover {
//     background-color: #383d3b;
//     color: #ff934f;
//   }
// `;

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChanges}
          value={newSkill.title}
        />
        <br />
        <textarea
          name="body"
          value={newSkill.body}
          placeholder="description"
          onChange={handleChanges}
        />
        <br />
        <button>Add Skill</button>
      </form>
    </div>
  );
};


export default HowToForm
