
import './App.css';
import React, {useState,useEffect} from 'react'
import Forgot from './forgot';
import Login from './login';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import{collection,getDocs} from 'firebase/firestore';
import SignUp from './signup';
import ToDo from "./todo"
import {DisplayTask} from "./display"
function App() {

  const [task,setTask]=useState([]);

  useEffect(()=>{

  })

  const addingTask=((addTask,taskType)=>{
    setTask((items)=>[...items,{
      addTask:addTask,
       taskType:taskType,
    }])
    console.log(task);
  })

return(

  <Router>
  <Switch>
    <Route exact path="/"component={Login}></Route>
    <Route path="/sign-up"component={SignUp}></Route>
    <Route path="/forgot"component={Forgot}></Route>
    <Route path="/todo"component={ToDo}></Route>

    <Route path="/todo">
       <ToDo list={task} add={addingTask}/>
    </Route>
  </Switch>
</Router>

)
}

export default App;
