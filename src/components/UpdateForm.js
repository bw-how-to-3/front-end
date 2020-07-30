import React, { useContext, useState, useEffect } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import { HowToContext } from '../contexts/HowToContext'


const UpdateForm = (props) => {
const { skills, setSkills } = useContext(HowToContext)
const { id } = useParams()
const location = useLocation();
const { push } = useHistory()

const [skill, setSkill] = useState ({
    title: '',
    body:'',
})
// useEffect(() => {
//     if(location.state) {
//         setSkill(location.state)
//     }else{
//     axiosWithAuth()
//     .get(`/posts/posts/${id}`, skill)
//     .then(res => {
//         setSkill(res.data)
        
//     })
//     .catch(error => {
//         console.log(error)
//     })
//   }  
// }, [id])

const handleChanges = (e) => {
    e.persist();
    setSkill({
        ...skill,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id)
    axiosWithAuth()
    .put(`/posts/post/${id}`, skill)
    .then(res => {
        console.log(res)
        // setSkills(res.data)
        push(`/skills-list/`)
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
