import React, {useState, useEffect} from 'react';
import classes from './Task.module.css';

const Task = 
    ({
        task,
        removeOldTask, 
        setUndoMessage,
        setNewUndoTask,
        undoAction,
        setUndoAction
    }) => {

    const [complete, setComplete]=useState(false);
    const [style, setStyle] = useState({
        display: 'flex'
    });

    const handleCompleteTask = () => {
        setComplete(true);
        setUndoMessage(true);
        setTimeout(() => setStyle({
            display: 'none'
        }), 500);
        setNewUndoTask((prev)=>{
            if(prev.content){
                removeOldTask(prev);
            }
            return task;
        });
        
        setTimeout(()=>setUndoMessage(false), 5000);
    };
    

    useEffect(()=>{
        if(undoAction){
            setStyle({
                display: 'flex'
            });
            setComplete(false);
            setUndoMessage(false);
            setUndoAction(false);
            setNewUndoTask({});
        }
   
    },[undoAction])

    return (

        <li className={`${classes.task} ${complete && classes.completed}`} style={style}>
             <div className={classes.checkmark} onClick ={handleCompleteTask}>
                <div className={classes.circle}></div>
                <div className={classes.tick}></div>
             </div>
            <div className={classes.taskContent}>{task.content}</div>
        </li>
    )
  };
  
  export default Task;