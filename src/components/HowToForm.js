import React, { useContext, useState, useEffect } from 'react'
import { HowToContext } from '../contexts/HowToContext'
import { Route, useHistory, useParams } from 'react-router-dom'


const HowToForm = () => {

    const { addSkill } = useContext(HowToContext)
    const { push } = useHistory()
    const { id } = useParams()

    const [newSkill, setNewSkill] = useState({
        id: id,
        title: '',
        body: '',
    })
    

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
                <textarea 
                name='body'
                value={newSkill.body} 
                placeholder='description' 
                onChange={handleChanges}/> 
                <br/>
                <button>Add Skill</button>
            </form>
        </div>
    )
}


export default HowToForm