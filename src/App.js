import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// COMPONENTS
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";

import SkillsList from "./components/SkillsList";
import NavigationBar from "./components/NavigationBar";

import "./App.css";
import { HowToContext } from "./contexts/HowToContext";
import HowToForm from "./components/HowToForm";
import UpdateForm from "./components/UpdateForm";
import axiosWithAuth from "./utils/axiosWithAuth";

function App() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/posts/posts")
      .then((res) => {
        console.log(res);
        setSkills(res.data);
      });
  }, []);

  const addSkill = (newPost) => {
    axiosWithAuth()
      .post("/posts/post", newPost)
      .then((res) => {
        console.log(res);
        setSkills([...skills, newPost]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <HowToContext.Provider value={{ addSkill, skills, setSkills }}>
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/skills-list" component={SkillsList} />
          <PrivateRoute path="/how-to-form" component={HowToForm} />
          <PrivateRoute path="/update-form" component={UpdateForm} />
        </div>
      </Router>
    </HowToContext.Provider>
  );
}

export default App;
