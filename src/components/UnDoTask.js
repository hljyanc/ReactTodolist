import React from 'react';
import classes from './UnDoTask.module.css'

const UnDoTask = 
    ({
        undoMessage,
        setUndoAction}) => {

    return (
            <div className={`${classes.btnContainer} ${!undoMessage&&classes.hidden}` } id="undoBtn">
                <div className={classes.undo}>
                    <p>Task Completed</p>
                    <p 
                        onClick={()=> setUndoAction(true)} 
                        className={classes.undoAction}>
                        Undo
                    </p>
                </div>       
            </div>
    )
  };
  
  export default UnDoTask;