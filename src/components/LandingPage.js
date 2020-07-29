<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='landing'>
            <h1>Welcome to Your Central source of How-To's!</h1>
            <h2>We hope that we can provide useful information and resources for you, and feel free to add some yourself!</h2>
            <div>
                <Link to='/register'>
                <button className="uk-button uk-button-default uk-button-large">Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
=======
import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Your Central source of How-To's!</h1>
      <h2>
        We hope that we can provide useful information and resources for you,
        and feel free to add some yourself!
      </h2>
      <div>
        <Link to="/register">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
>>>>>>> cb89c6b90358d024a90def17f02664c1ffab5c9c
