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
