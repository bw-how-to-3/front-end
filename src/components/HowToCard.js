import React, { useContext, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { HowToContext } from '../contexts/HowToContext'
import { Route, useHistory } from 'react-router-dom'


const HowToCard = (props) => {
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

            <h4>title</h4>
            <h5>description</h5>
            <p>instructions</p>
            <button>edit</button>
            <button>delete</button>

        </div>
    )

}



export default HowToCard