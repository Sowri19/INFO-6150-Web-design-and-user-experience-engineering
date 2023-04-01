import react from "react";
import NewTodo from "../Addtodo/addtodoitem";
import "./addtodowrapz.scss";

class NewTodoWrapper extends react.Component {
  render() {
    //gives todo component
    return (
      <div className="wrapper">
        <NewTodo />
      </div>
    );
  }
}

export default NewTodoWrapper;
