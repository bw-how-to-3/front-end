import React, { useState } from 'react'
// import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    const handleChanges = e => 

        setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })    
    
    const login = e => {
        e.preventDefault();
        // axiosWithAuth()
        axios.post('https://heftyb-how-to.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
            headers: {
                Authorization: `Basic ${btoa('lambda-client:secure')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.access_token)
            props.history.push('/skills-list')
        })
        .catch(error => {
            console.log('there was an error fetching a token, yikes', error)
            props.history.push('/login')
        })
    }

    return(
        <div className='login'>
            <div className='uk-section uk-section-small'>
                <div className="uk-container uk-flex uk-flex-center">
                <form onSubmit={login} className='uk-card uk-card-secondary uk-card-body'>
                <h4>Welcome back!</h4>
                <h4>Please Log into your account</h4>
                    <div className='uk-margin'>
                        <input
                        className='uk-input'
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={handleChanges}
                        value={credentials.username}
                        />
                    </div>
                    <div className='uk-margin'>
                        <input
                        className='uk-input'
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={handleChanges}
                        value={credentials.password}
                        />
                    </div>
                <div className='uk-margin'>
                    <button className='uk-button uk-button-default uk-width-1-1'>Log in</button>
                </div>
                <h4>Not registered yet?  <Link to='/Register'>Register Here</Link></h4>

                </form>
            </div>
        </div>
    </div>
    )
}


export default Login;
