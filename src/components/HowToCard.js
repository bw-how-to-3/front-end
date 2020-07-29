import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'


const HowToCard = (props) => {
    const { title, body } = props.skill  
    const { push } = useHistory() 
    // const { postid } = useParams()

    const deleteSkill = () => {
        axiosWithAuth()
        .delete(`/posts/post/${props.skill.postid}`)
        .then(res => {
            console.log(res)
            push('/skills-list')
            window.location.reload(false)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='card'>
            
            <div>
                <h2>Title: {title}</h2>
            </div>
            <div>
                <p>How to: {body}</p>
            </div>
            <button onClick={() => push(`/update-form/${props.skill.postid}`)}>edit</button>
            <button onClick={deleteSkill}>delete</button>

        </div>
    )

}



export default HowToCard