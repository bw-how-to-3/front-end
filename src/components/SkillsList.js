import React, { useContext } from 'react'
import { HowToContext } from '../contexts/HowToContext'
import { Link } from 'react-router-dom'

import HowToCard from './HowToCard'


const SkillsList = () => {
    const { skills } = useContext(HowToContext)

    

    return (
        <div className='skillslist'>
            {skills.map((skill) => (
                <div>
                    
                        <HowToCard
                        skill={skill}
                        key={skill.postid}
                        />
                    
                </div>
            ))}
            <Link id='add' to='/how-to-form'>Add a new skill!</Link>
        </div>
    )
}

export default SkillsList