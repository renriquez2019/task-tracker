import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist Appointment',
      day: '09/09/2022',
      reminder: true,
    },
    {
      id: 2,
      text: 'Work Meeting',
      day: '09/11/2022',
      reminder: true,
    },
    {
      id: 3,
      text: 'Final Exam',
      day: '09/13/2022',
      reminder: true,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(task)
  }
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ?
      {...task, reminder: !task.reminder} : task))
    console.log('toggle',id)
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        <Tasks 
          tasks = {tasks}
          onDelete = {deleteTask}
          onToggle = {toggleReminder}
        />: 'No Tasks to show'}
    </div>
  );
}

export default App;
