import React, {useState, useEffect} from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignInPage from './Pages/SignInPage';
import HomePage from './Pages/HomePage';

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

//import {collection, getDocs, getDoc, doc, deleteDoc} from 'firebase/firestore'







function App() {


  const [tasks, setTasks] = useState([]);

  const addTasks = ((task, priorityType)=>{
    setTasks((tasks)=>[...tasks, {
      task:task,
      priorityType:priorityType
    }])

    console.log(tasks);
  })
  return (
    <div className="App">
   
      <Router>
      <Routes>
        <Route exact path="/" element = {<LoginPage/>}></Route>
        <Route path="/SignInPage" element = {<SignInPage/>}></Route>
        <Route exact path="/HomePage" element = {<HomePage/>}></Route>
      </Routes>
    </Router>
        
    </div>
  );
}

export default App;
