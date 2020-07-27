import React, { useContext, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { HowToContext } from '../contexts/HowToContext'
import { Route, useHistory } from 'react-router-dom'


const HowTo = (props) => {
    const { push } = useHistory()

    const deleteSkill = () => {
        axiosWithAuth()
        .delete(``)
        .then(res => {
            console.log(res)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>

        </div>
    )

}



export default HowTo