import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
<<<<<<< HEAD
    return (
        <Route
        {...rest}
        render={() => {
            if (window.localStorage.getItem('token')){
                return <Component />
            }else {
                return <Redirect to='/login'/>
            }
        }}
        />
    )
}
=======
  return (
    <Route
      {...rest}
      render={() => {
        if (window.localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
>>>>>>> cb89c6b90358d024a90def17f02664c1ffab5c9c

export default PrivateRoute;
//comment
