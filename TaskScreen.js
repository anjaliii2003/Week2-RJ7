import React, {useEffect, useState} from "react";
import { getAllTasks, tasks } from "../apis/testApi";

const TaskScreen = () => {
    const [allTasks, setAllTasks] = useState([]);
     const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("TaskScreen Mounted");
         getAllTasks().then((foundTasks) =>
          setAllTasks(foundTasks));

    
    }, [count]);


    return allTasks.map((task,index) => (
            
            <div key={index} onClick={(e) => setCount(count + 1)}>
                    <h1>
                    {task.taskNumber} {task.taskName}
                </h1>
                <p>{task.taskDescription}</p>
            </div>
        ) );
};

export default TaskScreen;