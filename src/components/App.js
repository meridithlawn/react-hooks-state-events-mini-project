import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  const [clicked, setClicked] = useState("")
  // update this component to display <button> elements for each category

  function handleCategoryClick(event) {
    setClicked(event.target.textContent)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={handleCategoryClick} clicked={clicked}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      {/* <NewTaskForm categories={CATEGORIES.filter(category => !== "All")}/> */}
      <TaskList tasks={tasks} clicked={clicked} />
    </div>
  );
}

export default App;
