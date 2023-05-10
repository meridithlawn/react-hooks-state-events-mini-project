import React from "react";
import Task from "./Task"


function TaskList({tasks, clicked}) {

const filteredTasks = tasks.filter(task => {
  if (clicked === "All" || clicked === "") {
    return task
  }
  else if (task.category === clicked) {
    return task
  } else {
    return false
  }
})

const mappedTasks = filteredTasks.map(task => <Task key={task.text} task={task}/>)


  return (
    <div className="tasks">
      {mappedTasks}
    </div>
  );
}

export default TaskList;
