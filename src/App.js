import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
// COMPONENTS
import Login from './components/Login'
import Register from './components/Register'
import AddSkill from './components/AddSkill'
import SkillsList from './components/SkillsList'

import axiosWithAuth from './utils/axiosWithAuth'

import './App.css';
import { HowToContext } from './contexts/HowToContext';

function App() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('')
    .then(res => {
      console.log(res)
      setSkills()
    })
    
  }, [])

  const addSkill = newSkill => {
    axiosWithAuth()
    .post('', newSkill)
    .then(res => {
      console.log(res)
      setSkills([...skills, newSkill])
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <HowToContext.Provider value={{ addSkill, skill }}>
      <Router>
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route exact path='/Register' component={Register} />
        <PrivateRoute path='/SkillsList' component={SkillsList} />
        <PrivateRoute path='/AddHowTo' component={AddSkill} />
      </div>
      </Router>
    </HowToContext.Provider>
  );
}

export default App;
