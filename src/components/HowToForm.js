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