import React, {useState} from 'react';
import ActionGroup from './components/ActionGroup';
import TaskList from './components/TaskList';


const App = () =>{
  const [tasks, setTasks] = useState([{
    content: 'Buy a book',
    id: Math.random().toString(),
    isComplete: false
  }]);

  const [undoMessage, setUndoMessage] = useState(false);
  const [newUndoTask, setNewUndoTask] = useState({});
  const [undoAction, setUndoAction] = useState(false);

  const addTask = (newTask) => {
    setTasks((prev)=>[newTask, ...prev]);
  };

  const handleTaskComplete = (targetTask) =>{
    const newTasks = tasks.map(d =>({
      ...d,
      isComplete: d.id === targetTask.id ? true : d.isComplete
    }));
    setTasks(newTasks);
  }

  const handleUndoAction = (targetTask) =>{
    const newTasks = tasks.map(d =>({
      ...d,
      isComplete: d.id === targetTask.id ? false : d.isComplete
    }));
    setTasks(newTasks);
  }

  return (
    <React.Fragment>
      <ActionGroup 
        addTask={addTask} 
        undoMessage={undoMessage}
        setUndoAction={setUndoAction}
        newUndoTask={newUndoTask}
        setNewUndoTask={setNewUndoTask}
        handleUndoAction={handleUndoAction}/>
      <TaskList 
        tasks={tasks} 
        handleTaskComplete={handleTaskComplete}
        setUndoMessage={setUndoMessage}
        setNewUndoTask={setNewUndoTask}
        undoAction={undoAction}
        setUndoAction={setUndoAction}/>
    </React.Fragment>
    
  )
}

export default App;
