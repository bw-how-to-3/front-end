import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { HowToContext } from "../contexts/HowToContext";

const UpdateForm = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const { setSkills, skills } = useContext(HowToContext);

  const [skill, setSkill] = useState({
    title: "",
    description: "",
  });

  const handleChanges = (e) => {
    e.preventDefault();
    setSkill({ ...skill, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/posts/posts`)
      .then((res) => {
        console.log(res.data);
        res.filter((posts) => posts === res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put("", skill)
      .then((res) => {
        setSkills(res.data);
      });
  };

  return (
    <div>
      <h2>Update your How-To</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChanges}
          value={skill.title}
          placeholder="Title"
        />
        <br></br>
        <textarea
          type="text"
          name="title"
          onChange={handleChanges}
          value={skill.body}
          placeholder="Your description..."
        />

        <button
          onClick={() => {
            axiosWithAuth().put(`/skills-list/${id}`);
          }}
        >
          {""}
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
