import React from 'react';
import classes from './UnDoTask.module.css'

const UnDoTask = 
    ({
        undoMessage,
        setUndoAction,
        newUndoTask,
        setNewUndoTask,
        handleUndoAction}) => {
    
    const UndoHandler = () =>{
        handleUndoAction(newUndoTask);
        setNewUndoTask({});
        setUndoAction(true);
    }
    return (
            <div className={`${classes.btnContainer} ${!undoMessage&&classes.hidden}` } id="undoBtn">
                <div className={classes.undo}>
                    <p>Task Completed</p>
                    <p 
                        onClick={UndoHandler} 
                        className={classes.undoAction}>
                        Undo
                    </p>
                </div>       
            </div>
    )
  };
  
  export default UnDoTask;