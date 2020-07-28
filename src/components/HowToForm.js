import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import HowToContext from "../contexts/HowToContext";

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
    <div>
      <form onChange={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChanges}
          value={newSkill.title}
        />
        <textarea
          name="body"
          onChange={handleChanges}
          value={newSkill.body}
          placeholder="Description"
        />
        <button></button>
      </form>
    </div>
  );
};

export default HowToForm;
