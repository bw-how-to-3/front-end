import React, { useContext, useEffect, useState } from "react";
import { HowToContext } from "../contexts/HowToContext";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import HowToCard from "./HowToCard";

const SkillsList = () => {
  const { skills } = useContext(HowToContext);

  return (
    <div className="skillslist">
      {skills.map((skill) => (
        <HowToCard skill={skill} key={skill.id} />
      ))}
      <Link to="/add-skill">Add a new skill!</Link>
    </div>
  );
};

export default SkillsList;
