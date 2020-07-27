<<<<<<< HEAD
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
=======
import React, { useContext, useState, useEffect } from 'react'
import { HowToContext } from '../contexts/HowToContext'
import { useHistory } from 'react-router-dom'

const initialState = {
    title: '',
    description: '',
    instructions: '',
}



const HowToForm = () => {

    const [newSkill, setNewSkill] = useState(initialState)
    const { addSkill } = useContext(HowToContext)
    const { push } = useHistory()

    const handleChanges = (e) => {
        e.persist()
        setNewSkill({
            ...newSkill,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSkill(newSkill)
        push('/skills-list')
        window.location.reload(false)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='title'
                placeholder='title'
                onChange={handleChanges}
                value={newSkill.title}
                /><br/>
                <input
                type='textarea'
                name='description'
                placeholder='description'
                onChange={handleChanges}
                value={newSkill.description}
                /><br/>
                <input
                type='textarea'
                name='instructions'
                placeholder='instructions'
                onChange={handleChanges}
                value={newSkill.instructions}
                /><br/>
                <button>Add Skill</button>
            </form>
        </div>
    )
}


export default HowToForm
>>>>>>> 68aee4f4746640b1fcaadfb43904b98e561375d0
