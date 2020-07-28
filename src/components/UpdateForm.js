import React, { useContext, useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import { HowToContext } from '../contexts/HowToContext'


const UpdateForm = (props) => {
const { setSkills } = useContext(HowToContext)
const { id } = useParams()
const { push } = useHistory()
const [skill, setSkill] = useState ({
    title: '',
    body:'',
})

useEffect(() => {
    axiosWithAuth()
    .get(``)
    .then(res => {
        setSkill(res.data)
    })
    .catch(error => {
        console.log(error)
    })
}, [])

const handleChanges = (e) => {
    e.persist();
    setSkill({
        ...skill,
        [e.target.name]: e.target.value
    })
}


const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put(``, skill)
    .then(res => {
        setSkills(res.data)
        push(`/skills-list/${id}`)
    })
    .catch(error => {
        console.log(error)
    })
    
    
}


    return (
        <div>
            <h2>Update your How-To</h2>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='title'
                onChange={handleChanges}
                value={skill.title}
                placeholder='update title'
                /><br/>
                <textarea
                name='body'
                value={skill.body}
                onChange={handleChanges}
                placeholder='update description'
                /><br />
                <button>Update</button>
            </form>
    
        </div>
    )


}

export default UpdateForm