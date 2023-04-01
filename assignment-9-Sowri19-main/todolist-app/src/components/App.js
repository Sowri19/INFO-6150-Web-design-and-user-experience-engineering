import "./App.scss";
import react from "react";
import TodoItem from "./Todo-Items/TodoItem";
import NewTodoWrapper from "./AddTodoWrapz/addtodowrapz";

class App extends react.Component {
  constructor() {
    super();

    // State variable are utilized for storing all the todos item data
    this.state = {
      todosData: [],
    };
    // bidning the handleChange function with the class so that we can pass it as a callback without worrying about its context.
    this.handleChange = this.handleChange.bind(this);
  }

  // invoking after loading the component
  componentWillMount() {
    // FETCH DATABASE FROM API
    fetch("http://localhost:9000/todos")
      .then((response) => response.json())
      .then((data) => {
        // storing todo data from API to the state variable
        this.setState({
          todosData: data,
        });
      });
  }

  // This method is invoked when we complete a todo
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todosData.map((todo) => {
        if (todo._id == id) {
          //COMPLETED FLAG WILL BE INVERTED
          todo.completed = !todo.completed;

          // FETCH AND UPDATE
          fetch("http://localhost:9000/todos/" + todo._id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
          })
            .then((response) => response.json())
            .then((data) => {
              window.location.reload();
            })
            .catch((error) => alert("Error posting data: ", error));
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  // All components are rendered here
  render() {
    const todocomponents = this.state.todosData.map((todo) => (
      <TodoItem key={todo._id} todo={todo} handleChange={this.handleChange} />
    ));
    return (
      <div className="container">
        <h1>TO-DO LIST</h1>
        <div className="wrapper2">
          <div className="todoList">{todocomponents}</div>
        </div>
        <NewTodoWrapper />
      </div>
    );
  }
}

export default App;
