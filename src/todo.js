import React from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export default function Todo({ todo, handleDelete}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      {todo.priority=="Low"? (
        <div className="action">
        <div className="action_task"> 
            <input
              type="text"
              value={todo.title === "" ? newTitle : todo.title}
              className="list"
              onChange={handleChange}
              style={{borderBottom:"5px solid green"}}/>    
        </div>
        
          <div className="action_delete"> 
              <button  style={{borderBottom:"4px solid green"}}  className="button-delete" onClick={() => handleDelete(todo.id)} >
                <CheckCircleIcon id="i" />
                
              </button>
         </div>
      
      </div>

      ):todo.priority=="Medium"?(
        <div className="action">
        <div className="action_task"> 
            <input
              type="text"
              value={todo.title === "" ? newTitle : todo.title}
              className="list"
              onChange={handleChange}
              style={{borderBottom:"5px solid orange"}}/>    
        </div>
       
          <div className="action_delete"> 
              <button style={{borderBottom:"4px solid orange"}} className="button-delete" onClick={() => handleDelete(todo.id)}>
                <CheckCircleIcon id="i" />
              </button>
         </div>
      
      </div>
      ):(
        <div className="action">
        <div className="action_task"> 
            <input
              type="text"
              value={todo.title === "" ? newTitle : todo.title}
              className="list"
              onChange={handleChange}
              style={{borderBottom:"5px solid red"}}/>    
        </div>
        
          <div className="action_delete"> 
              <button style={{borderBottom:"4px solid red"}} className="button-delete" onClick={() => handleDelete(todo.id)}>
                <CheckCircleIcon id="i" />
              </button>
         </div>
      
      </div>
      )}
      


    
    </div>
  );
}
