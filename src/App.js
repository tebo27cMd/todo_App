
import './App.css';
import Login from './components/login';
import SignUp from './components/register';
import React, {useState,useEffect} from 'react'

import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'

function App() {

  useEffect(()=>{
   
    
  })


  return (
    <Router>
    <Switch>
      <Route exact path="/"component={Login}></Route>
      <Route path="/register"component={SignUp}></Route>
    </Switch>
  </Router>
  
  );
}

export default App;
