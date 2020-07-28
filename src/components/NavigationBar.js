import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div class='navigation'>
            <div className='home'>
                <Link to='/' className=''>Home</Link>
            </div>
            <div class='signup'>
                <Link to='/login'><button>Log in</button></Link>
                <Link to='/register'><button>Register</button></Link>
            </div>
        </div>
    )
}

export default NavigationBar