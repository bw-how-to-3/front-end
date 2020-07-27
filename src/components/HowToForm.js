import React, { useState, useHistory } from "react";
import SkillsList from "./SkillsList";

const initialState = {
  title: "",
  description: "",
  instructions: "",
};

const HowToForm = () => {
  const { push } = useHistory();

  const [newSkill, setNewSkill] = useState(initialState);

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
    <div>
      <form onChange={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChanges}
          value={newSkill.title}
        />
        <input
          type="textarea"
          name="description"
          placeholder="Description"
          onChange={handleChanges}
          value={newSkill.description}
        />
        <input
          type="textarea"
          name="instructions"
          placeholder="Instructions"
          onChange={handleChanges}
          value={newSkill.instructions}
        />
        <button></button>
      </form>
    </div>
  );
};

export default HowToForm;
