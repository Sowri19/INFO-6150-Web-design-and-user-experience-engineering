import react, { useState } from "react";
import "./TodoItemAccordian.scss";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  //Adding states to the todoitems
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="todo-item accordian">
      <li className="liElements">
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={(event) => props.handleChange(props.todo._id)}
        />
        <h4
          style={props.todo.completed ? completedStyle : null}
          onClick={() => setIsOpen(!isOpen)}
        >
          {props.todo.title}
        </h4>
      </li>
      {isOpen && (
        <div className="content">
          <p>
            <b>Description:</b>
            {props.todo.description}
          </p>
          <p>
            <b>Due Date:</b> {props.todo.dueDate}
          </p>
          <p>
            <b>Due Time:</b>
            {props.todo.dueTime}
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
