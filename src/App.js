
import './App.css';
import React, {useState,useEffect} from 'react'
import Forgot from './forgot';
import Login from './login';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import{collection,getDocs} from 'firebase/firestore';
import SignUp from './signup';
function App() {

return(

  <Router>
  <Switch>
    <Route exact path="/"component={Login}></Route>
    <Route path="/sign-up"component={SignUp}></Route>
    <Route path="/forgot"component={Forgot}></Route>
  
  </Switch>
</Router>

)
}

export default App;
