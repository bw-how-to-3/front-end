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
        .post('', )
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.payload)
            props.history.push('/skills-list')
        })
        .catch(error => {
            console.log('there was an error fetching a token, yikes', error)
        })
    }

    return(
        <div className='login'>
            <form className='form'>
            <h4>Welcome back!</h4>
            <h4>Please Log into your account</h4>
                <input
                type='text'
                name='username'
                placeholder='username'
                onChange={handleChanges}
                value={account.username}
                /><br />
                <input
                type='password'
                name='password'
                placeholder='password'
                onChange={handleChanges}
                value={account.password}
                />
            <button>Log in</button>

            <h4>Not registered yet?  Register Now!</h4>

            <Link to='/Register'>Register Here</Link>
            </form>
        </div>
    )
}


export default Login