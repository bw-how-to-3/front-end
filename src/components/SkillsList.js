import React, { useContext, useEffect, useState } from 'react'
import { HowToContext } from '../contexts/HowToContext'
import { Link, useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import HowToCard from './HowToCard'


const SkillsList = () => {
    const { skills } = useContext(HowToContext)
    const { push } = useHistory()

    const deleteSkill = () => {
        axiosWithAuth()
        .delete(``)
        .then(res => {
            console.log(res)
            push('/skills-list')
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='skillslist'>
            {skills.map((skill) => (
                <div>
                    <Link key={skill.id} to={`/how-to/${skill.id}`}>
                        <HowToCard
                        skill={skill}
                        key={skill.id}
                        />
                    </Link>
                    <button onClick={() => push(`/update-form/${skill.id}`)}>edit</button>
                    <button onClick={deleteSkill}>delete</button>
                </div>
            ))}
            <Link to='/how-to-form'>Add a new skill!</Link>
        </div>
    )
}

export default SkillsList