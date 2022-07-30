import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

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
  return (
    <div className="container">
      <Header/>
      <Tasks tasks ={tasks}/>
    </div>
  );
}

export default App;
