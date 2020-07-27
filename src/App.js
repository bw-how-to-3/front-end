import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// COMPONENTS
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import HowToCard from "./components/HowToCard";
import SkillsList from "./components/SkillsList";
import NavigationBar from "./components/NavigationBar";

import axiosWithAuth from "./utils/axiosWithAuth";

import "./App.css";
import { HowToContext } from "./contexts/HowToContext";
import HowToForm from "./components/HowToForm";

const initialState = {
  title: "",
};

function App() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then((res) => {
        console.log(res);
        setSkills();
      });
  }, []);

  const addSkill = (newSkill) => {
    axiosWithAuth()
      .post("", newSkill)
      .then((res) => {
        console.log(res);
        setSkills([...skills, newSkill]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <HowToContext.Provider value={{ addSkill, skills }}>
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/skills-list" component={SkillsList} />
          <PrivateRoute path="/add-skill" component={HowToForm} />
        </div>
      </Router>
    </HowToContext.Provider>
  );
}

export default App;
