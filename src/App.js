import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import TaskForm from './components/TaskForm'
import Tasks from './components/Tasks'

function App() {

  const [state, setState] = useState({
    tasks: [],
  })
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: Date.now(),
    priority: 1,
    isNewTask: true
  });

  const fetchData = () => {
    setInterval(() => {
      axios
      .get("/api/getTasks")
      .then(response => {
        const Task = response.data;
        setState(() => ({
          tasks: Task.tasks.sort((a, b) => (
            a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0
          )),
        }))
      })
      .catch(error => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
    }, 2000);
    
  }

  useEffect(() => {
    fetchData();
  },[])

  const addTask = () => {
      setTask({...task, isNewTask: false});
      setState(prevState => ({
        tasks: [...prevState.tasks, {...task, isNewTask: false}],
      }))
      if(!task._id){
        axios.post("/api/addTask", task);
      }
      setTask(() => ({
        title: '',
        description: '',
        date: Date.now(),
        priority: 1,
        isNewTask: true,
      }))
      setState(prevState => ({
        tasks: [...prevState.tasks.sort((a, b) => (
          a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0
        ))]
      }))
    }

  const updateTask = () => {
      setState(prevState => ({
        tasks: prevState.tasks.filter(item => (item._id !== task._id)),
      }));
      if(task._id){
        axios.put("/api/updateTask", task);
      }
      addTask();
    }

  const handleChange = e =>
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      date: Date.now(),
      isNewTask: task.isNewTask
    });

  const editTask = id => {
    console.log(id)
    setTask(state.tasks.filter(item => item._id === id)[0])
  };

  const removeTask = id => {
      setState({
        tasks: state.tasks.filter(item => (item._id !== id)),
    });
    if (id) {
      axios.delete(`/api/${id}`, task);
    }
  }

  return (
    <div className="container py-4 text-dark">
      <TaskForm task={task} handleChange={handleChange} addTask={addTask} updateTask={updateTask} />
      <Tasks allTasks={state.tasks} editTask={editTask} deleteTask={removeTask} />
    </div>
  );
}

export default App;
