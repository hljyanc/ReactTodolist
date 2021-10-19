import React, {useRef} from 'react';
import classes from './InputTask.module.css';

const InputTask = props => {

    const taskInputRef = useRef();

    const handleAddTask = () =>{
        const newTaskContent = taskInputRef.current.value;
        if(newTaskContent.length===0){
            return;
        }
        if(newTaskContent.length>0){
            const newTask = {
                content: newTaskContent,
                id: Math.random().toString(),
                isComplete: false
            };
            props.addTask(newTask);
            taskInputRef.current.value='';
        }
    }

    return (
            <div className={classes.addTask}>
                <input 
                    type="text" 
                    placeholder="Add a task" 
                    className={classes.addNewTask}
                    ref={taskInputRef}/>
                <div 
                    onClick={handleAddTask}
                    className={classes.iconBtn}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="feather feather-plus">
                        <line 
                            x1="12" 
                            y1="5" 
                            x2="12" 
                            y2="19">
                        </line>
                        <line 
                            x1="5" 
                            y1="12" 
                            x2="19" 
                            y2="12">
                        </line>
                    </svg>
                </div>
            </div>
    )
  };
  
  export default InputTask;