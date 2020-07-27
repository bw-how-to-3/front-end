<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
import { HowToContext } from "../contexts/HowToContext";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import HowToCard from "./HowToCard";
=======
import React, { useContext, useEffect, useState } from 'react'
import { HowToContext } from '../contexts/HowToContext'
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import HowToCard from './HowToCard'
>>>>>>> 68aee4f4746640b1fcaadfb43904b98e561375d0

const SkillsList = () => {
  const { skills } = useContext(HowToContext);

<<<<<<< HEAD
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
=======
const SkillsList = () => {
    const { skills } = useContext(HowToContext)

    return (
        <div className='skillslist'>
            {skills.map((skill) => (
                <div>
                    <HowToCard
                    skill={skill}
                    key={skill.id}
                    />
                </div>
            ))}
            <Link to='/add-skill'>Add a new skill!</Link>
        </div>
    )
}

export default SkillsList
>>>>>>> 68aee4f4746640b1fcaadfb43904b98e561375d0
