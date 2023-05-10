import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  function onChangeText(event) {
    setText(event.target.value);
  }

  function onChangeCategory(event) {
    setCategory(event.target.value)
  }

  function handleTaskSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({text: text, category: category})
    
  }
  const mappedCategories = categories.map(category => (
  <option key={category} value={category}> {category} </option>)
  )



  // When the form is submitted, add a new task to the list with the text and category from the form
  // need to do callback prop onTaskFormSubmit that takes a task object as an argument
  // function that takes in the submit event, with prevent default. From that function call the ontaskformsubmit

  return (

    <form className="new-task-form" onSubmit={handleTaskSubmit}>
      <label>
        Details
        <input onChange={onChangeText}type="text" name="text" value={text}/>
      </label>
      <label>
        Category
        <select onChange={onChangeCategory} name="category" value={category}>
          {mappedCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
