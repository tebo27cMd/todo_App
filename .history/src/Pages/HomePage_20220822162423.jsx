
import React, { useState, useEffect } from "react";

  import '../css/HomePage.css';
  
  import {db} from '../Config-file/firebase';
  
  import {addDoc, collection,getDocs} from 'firebase/firestore';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import google from '../image/accept.png'
  import logout from '../image/logout.png'
 
  
  
 

function HomePage() {
  const[task, setTask]= useState('');
  const[priority, setPriority] = useState('');

  const[items, setItem] = useState([]);

  const itemRef =collection(db,"Tasks");

  const getItems = async()=>{
      let data = await getDocs(itemRef);
      setItem(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
  }

  const addItems = async()=>{
     await addDoc(itemRef, {task:task, priority:priority})
     alert("Item added Successfully");
    getItems();
    }
    

    useEffect(()=>{
      getItems();
   }, [])


  
  
  
    return (
      <div className="AddTask">
          <div className="topPart">
              <h1>Welcome Hopewell</h1>
              <button><div className="tick"><img src={logout} alt="" /></div></button>
          </div>
  
          <div className="bottomPart">
            <div className="input-fields">
              <input type="text" placeholder="Add New Task" onChange={(e)=>setTask(e.target.value)}/>
                <select name="priority" id="priority" onChange={(e)=>setPriority(e.target.value)}>
                    <option value="Priority">PRIORITY</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
    
                </select>
                
                <button className="topBtn" onClick={addItems}>+</button>
                
            </div>

            <div className="task-list">
            {
                        items.map(item=>((
                            <div className="items" key={item.id}>
                                {
                                    item.priority == "Low" ? (
                                        
                                        <div className="item" style={{borderBottom: "3px solid green"}}>
                                        <span>{item.task}</span>
                                        <button className="complete"><div className="tick"><img src={google} alt="" /></div></button>
                                        </div>
                                
                                    ):item.priority == "Medium" ? (
                                        <div className="item" style={{borderBottom: "3px solid orange"}}>
                                        <span>{item.task}</span>
                                        <button className="complete"><div className="tick"><img src={google} alt="" /></div></button>
                                        </div>
                                    ):item.priority == "High" ? (
                                        <div className="item" style={{borderBottom: "3px solid red"}}>
                                        <span>{item.task}</span>
                                        <button className="complete"><div className="tick"><img src={google} alt="" /></div></button>
        
                                        </div>
                                    ):(
                                        <div>

                                        </div>
                                    )
                                }



                                
                            </div> 
                        )))
                    }
            </div>
              
          </div>
          
      </div>
    )
  }
  


export default HomePage;