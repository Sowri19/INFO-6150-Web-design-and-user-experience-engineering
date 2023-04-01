import react, { useState } from "react";
import "./addtodo.scss";
import NewTodoForm from "./addtodoform";

function NewTodo() {
  // useState allows us to have state variable in functional compnent
  // Two state variable to implement accordion functionality
  const [isitOpen, setIsitOpen] = useState(false);

  // Gives a new Todo Form
  return (
    <div className="inputfield">
      <input
        type="submit"
        name=""
        id="submit"
        value="Add New Todo"
        onClick={() => setIsitOpen(!isitOpen)}
      ></input>
      {isitOpen && (
        <div>
          <NewTodoForm />
        </div>
      )}
      <p id="detail"></p>
    </div>
  );
}

export default NewTodo;
