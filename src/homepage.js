import React, { useEffect, useState } from "react";
import ToDo from "./todo";
import { DisplayTask } from "./display";

function Home(props){
    
    const [addTask,setAddTask]=useState(0);
    const[taskType,setTaskType]=useState(0);

    useEffect(()=>{
        let addTask=0
        let taskType=0

        for(let index=0; index< props.list.leghth;index++){
            if(props.list[index].taskType=="Low") {
                addTask=addTask+parseInt(props.list[index].addTask);
            }else{

                addTask=addTask+parseInt(props.list[index].addTask);
            }
        }

        setAddTask(addTask);
        setTaskType(taskType);


    },[props.list.leghth]);

    return(
        <div>
            <ToDo addTask={addTask} taskType={taskType}/>
            <DisplayTask list={props.list}/>

        </div>
    )
}

export default Home