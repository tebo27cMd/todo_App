import React from "react"


function DisplayTask(props){
    return(
        <div>
            {props.list.map((addTask)=>(
                <div>     
                      {addTask.taskType=="Low"} ?(
                        <div>
                     <h4 style={{paddingLeft:'12px',paddingTop:"25px"}}>
                         {addTask.addTask}
                     </h4> 
                 </div>

                      )
                </div>
        
            ))}


        </div>
    )
}

export {DisplayTask};