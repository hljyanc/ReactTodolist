import React from 'react';
import Task from './Task';
import classes from './TaskList.module.css';

const TaskList = 
    ({
        tasks, 
        handleTaskComplete,
        setUndoMessage,
        setNewUndoTask,
        undoAction,
        setUndoAction
    }) => {

    const inCompleteTasks = tasks.filter(d=> d.isComplete === false);

    return (
        <div className={classes.listBodyContainer}>
            <ul className={classes.listBody}>
                {inCompleteTasks.map(task => {
                    return <Task 
                                key={task.id} 
                                task={task}
                                handleTaskComplete={handleTaskComplete}
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