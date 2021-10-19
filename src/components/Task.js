import React, {useState, useEffect} from 'react';
import classes from './Task.module.css';
let UndoMessageTimeout;

const Task = 
    ({
        task, 
        handleTaskComplete,
        setUndoMessage,
        setNewUndoTask,
        undoAction,
        setUndoAction
    }) => {
    
   
    const [completeTransition, setCompleteTransition]=useState(false);

    const handleCompleteTask = () => {
        setCompleteTransition(true);
        setNewUndoTask(task);

        setTimeout(()=>{
            handleTaskComplete(task);
        }, 500);

        //display UndoMessage for 5s
        setUndoMessage(true);
        if(UndoMessageTimeout){
            clearTimeout(UndoMessageTimeout);
            UndoMessageTimeout = null;
        }
        UndoMessageTimeout = setTimeout(()=>setUndoMessage(false), 5000);
    };
    

    useEffect(()=>{
        if(undoAction){
            setCompleteTransition(false);
            setUndoMessage(false);
            setUndoAction(false);
        }
   
    },[undoAction])

    return (

        <li className={`${classes.task} ${completeTransition && classes.completed}`}>
             <div className={classes.checkmark} onClick ={handleCompleteTask}>
                <div className={classes.circle}></div>
                <div className={classes.tick}></div>
             </div>
            <div className={classes.taskContent}>{task.content}</div>
        </li>
    )
  };
  
  export default Task;