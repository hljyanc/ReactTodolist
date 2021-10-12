import React from 'react';
import Task from './Task';
import classes from './TaskList.module.css';

const TaskList = 
    ({
        tasks, 
        removeOldTask, 
        setUndoMessage,
        setNewUndoTask,
        undoAction,
        setUndoAction
    }) => {

    return (
        <div className={classes.listBodyContainer}>
            <ul className={classes.listBody}>
                {tasks.map(task => {
                    return <Task 
                                key={task.id} 
                                task={task}
                                removeOldTask={removeOldTask}
                                setUndoMessage={setUndoMessage}
                                setNewUndoTask={setNewUndoTask}
                                undoAction={undoAction}
                                setUndoAction={setUndoAction}/>
                })}         
            </ul>
        </div>
    )
  };
  
  export default TaskList;