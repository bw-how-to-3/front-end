import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
<<<<<<< HEAD
    return (
        <div className='navigation'>
            <div className='home'>
                <Link to='/' className=''>Home</Link>
            </div>
            <div className='signup'>
                <Link to='/login'><button>Log in</button></Link>
                <Link to='/register'><button>Register</button></Link>
            </div>
        </div>
    )
}
=======
  return (
    <div>
      <Link to="/">How-To</Link>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};
>>>>>>> cb89c6b90358d024a90def17f02664c1ffab5c9c

export default NavigationBar;
