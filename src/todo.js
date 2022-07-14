import React,{useState} from "react"

import {db} from './config/firebase';
import{addDoc ,collection } from 'firebase/firestore'



function ToDo(props){

    const[addTask,setAddTask]=useState('')
    const [taskType,setTaskType]=useState('')

    const collectionReF=collection(db,"task");
    const add =(()=>{
    const task={
        addTask:addTask,
        taskType:taskType
    };

     addDoc(collectionReF,task).then(()=>{
        alert("task added succefully")
     }).catch((error)=>{
        console.log(error)
     })
     props.add(addTask,taskType);
    })

    return(
        <div className="contain">
          <div className="addTask">  
             <input className="taskbar" placeholder="Add New Task" onChange={(e)=>setAddTask(e.target.value)} />    
             <div  className="bar">   
                 <select onChange={(e)=>setTaskType(e.target.value)} className="select">
                    <option  >Priority</option>
                     <option value ="Low" >Low</option>
                     <option  value ="Medium">Medium</option>
                     <option  value ="High">High</option>
                 </select>
               </div>
               <div className="addingbutton">
                 <button className="addbutton" onClick={add}>+</button>
                </div>   
         </div>
        </div>

    );
}

export default ToDo