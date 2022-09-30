import React from "react";
import { db } from "./config/firebase";
import { collection, addDoc } from "firebase/firestore";
import './App.css';


 function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [priority,setPriority]=React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(priority,"start of function")
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        
        title:title,
        priority:priority,
        completed: false,
      });

      setTitle("");
      setPriority("");

    

    }}
 
  return (
           <form onSubmit={handleSubmit}>
           <div className="addTask">
                 <input className="taskbar"
               type="text"
               placeholder="Enter todo..."
               value={title}
               onChange={(e) => setTitle(e.target.value)}
             />
             <div className="selection">   
               <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>Select Priority</option>
                <option  value= "Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
             </div>
          
           
           <div className="addingbutton">
             <button className="addbutton">+</button>
           </div>
           </div>
     
         </form>
     
 
  );
  
}
export default  AddTodo