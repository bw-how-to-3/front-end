import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'

const Login = props => {
    const [account, setAccount] = useState({
        username: '',
        password: '',
    })

    const handleChanges = e => {
        setAccount({
        ...account,
        [e.target.name]: e.target.value
        })
    }
    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', account)
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.payload)
            props.history.push('/skills-list')
        })
        .catch(error => {
            console.log('there was an error fetching a token, yikes', error)
            props.history.push('/')
        })
    }

    return(
        <div className='uk-section uk-section-small'>
        <div className="uk-container uk-flex uk-flex-center">
            <form className='form' onSubmit={submitForm} className='uk-card uk-card-secondary uk-card-body'>
            <h4>Welcome back!</h4>
            <h4>Please Log into your account</h4>
                <div className='uk-margin'>
                    <input
                    className='uk-input'
                    type='text'
                    name='username'
                    placeholder='username'
                    onChange={handleChanges}
                    value={account.username}
                    />
                </div>
                <div className='uk-margin'>
                    <input
                    className='uk-input'
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={handleChanges}
                    value={account.password}
                    />
                </div>
            <div className='uk-margin'>
                <button className='uk-button uk-button-default uk-width-1-1'>Log in</button>
            </div>
            <h4>Not registered yet?  <Link to='/Register'>Register Here</Link></h4>

            </form>
        </div>
    </div>
    )
}


export default Login