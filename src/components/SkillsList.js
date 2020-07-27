import React, { useContext, useEffect, useState } from 'react'
import { HowToContext } from '../contexts/HowToContext'
import { Link } from 'react-router'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const skillsList = () => {
    const { skills } = useContext(HowToContext)

    return (
        <div className='skillslist'>
            {skills.map((skill) => (
                <HowTo
                skill={skill}
                key={skill.id}
                />
            ))}
            <Link to='/AddSkill'>Add a new skill!</Link>
        </div>
    )
}