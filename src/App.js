import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchMyTasksFromMyBackend() {
      // You can await here
      const tasks = await axios.get(`http://localhost:5000/tasks`);
      setTasks(tasks.data);
    }
    fetchMyTasksFromMyBackend();
  }, []);

  return (
    <div>
      <h1>My Tasks</h1>
      {tasks.length ? (
        tasks.map((task, index) => (
          <div>  
            <p>{index+1}. {task.description}</p>
          </div>
        ))
      ) : (
        <p>No Tasks Yet! Create One!</p>
      )}
    </div>
  );
};

export default App;
