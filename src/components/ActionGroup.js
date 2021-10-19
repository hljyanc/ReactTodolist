import React from 'react';
import InputTask from './InputTask';
import UnDoTask from './UnDoTask';


const ActionGroup = 
    ({
        addTask, 
        undoMessage,
        setUndoAction, 
        newUndoTask,
        setNewUndoTask,
        handleUndoAction}) => {
    return (
        <div>
            <InputTask 
                addTask={addTask}/>
            <UnDoTask 
                undoMessage={undoMessage} 
                setUndoAction={setUndoAction}
                newUndoTask={newUndoTask}
                setNewUndoTask={setNewUndoTask}
                handleUndoAction={handleUndoAction}/>
        </div>
    )
  };
  
  export default ActionGroup;