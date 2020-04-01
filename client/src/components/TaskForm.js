import React from "react";

export default function TaskForm(props) {
  const handleCall = () => {
    const task = props.task;
    props.task.isNewTask ? props.addTask(task) : props.updateTask(task);
  };
  return (
    <div className="add-task">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          className="form-control"
          value={props.task.title}
          name="title"
          onChange={props.handleChange}
          placeholder="Title of the task"
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          className="form-control"
          value={props.task.description}
          name="description"
          onChange={props.handleChange}
          placeholder="Description of the task..."
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label>Priority:</label>
        <input
          type="number"
          className="form-control w-50"
          value={props.task.priority}
          name="priority"
          onChange={props.handleChange}
          placeholder="Set priority of the task"
        />
      </div>
      <button className="btn btn-info mb-2" onClick={e => handleCall()}>
        {props.task.isNewTask ? "Add Task" : "Update Task"}
      </button>
    </div>
  );
}
