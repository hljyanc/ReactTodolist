import React, {useState} from 'react';
import ActionGroup from './components/ActionGroup';
import TaskList from './components/TaskList';


const App = () =>{
  const [tasks, setTasks] = useState([{
    content: 'Buy a book',
    id: Math.random().toString()}]);

  const [undoMessage, setUndoMessage] = useState(false);
  const [newUndoTask, setNewUndoTask] = useState({});
  const [undoAction, setUndoAction] = useState(false);

  const addTask = (newTask) => {
    setTasks((prev)=>[newTask, ...prev]);
  };

  const removeOldTask = (targetTask) => {
    setTasks((prev)=>prev.filter(task => task.id !== targetTask.id));
  };

  return (
    <React.Fragment>
      <ActionGroup 
        addTask={addTask} 
        undoMessage={undoMessage}
        setUndoAction={setUndoAction}/>
      <TaskList 
        tasks={tasks} 
        removeOldTask={removeOldTask}
        setUndoMessage={setUndoMessage}
        setNewUndoTask={setNewUndoTask}
        undoAction={undoAction}
        setUndoAction={setUndoAction}/>
    </React.Fragment>
    
  )
}

export default App;
