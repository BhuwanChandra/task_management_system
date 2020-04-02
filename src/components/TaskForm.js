import React from "react";

export default function TaskForm(props) {
  const handleCall = (e) => {
    e.preventDefault();
    const task = props.task;
    props.task.isNewTask ? props.addTask(task) : props.updateTask(task);
  };
  return (
    <div className="add-task">
    <form>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          className="form-control"
          value={props.task.title}
          name="title"
          onChange={props.handleChange}
          placeholder="Title of the task"
          required={true}
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
          pattern="[1-9][0-9]+"
        />
      </div>
      <button type="submit" className="btn btn-info mb-2" onClick={e => handleCall(e)}>
        {props.task.isNewTask ? "Add Task" : "Update Task"}
      </button>
      </form>
    </div>
  );
}
