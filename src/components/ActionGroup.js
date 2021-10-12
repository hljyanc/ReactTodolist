import React from 'react';
import InputTask from './InputTask';
import UnDoTask from './UnDoTask';


const ActionGroup = 
    ({
        addTask, 
        undoMessage,
        setUndoAction}) => {
    return (
        <div>
            <InputTask 
                addTask={addTask}/>
            <UnDoTask 
                undoMessage={undoMessage} 
                setUndoAction={setUndoAction}/>
        </div>
    )
  };
  
  export default ActionGroup;