import React from "react";

export default function Tasks({ allTasks, editTask, deleteTask }) {
  return (
    <div className="show-task mt-4 accordion" id="accordionExample">
      {allTasks.map((item, index) => (
        <div className="card mb-2" key={index}>
          <div className="card-header" id={"heading" + item._id}>
            <h2 className="mb-0">
              <div
                className="font-weight-bold collapsed cursor-pointer"
                data-toggle="collapse"
                data-target={"#collapse" + item._id}
                aria-expanded="true"
                aria-controls={"collapse" + item._id}
              >
                {index + 1 + ". " + item.title}
              </div>
              <button
                className="btn btn-sm btn-success mt-1 mr-2"
                onClick={() => editTask(item._id)}
              >
                Edit Task
              </button>
              <button
                className="btn btn-sm btn-danger mt-1"
                onClick={() => deleteTask(item._id)}
              >
                Delete Task
              </button>
              <button className="btn btn-sm btn-outline-primary mt-2 float-right">
                Priority {item.priority}
              </button>
            </h2>
          </div>
          <div
            id={"collapse" + item._id}
            className="collapse"
            aria-labelledby={"heading" + item._id}
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <h3>Description: </h3>
              {item.description}
              <p className="text-primary mt-2 mb-0">
                {new Date(item.date).toLocaleString("en-Us", {
                  dateStyle: "medium",
                  timeStyle: "short"
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
