import react from "react";
import "./addtodo.scss";

class NewTodoForm extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      dueDate: "",
      dueTime: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  // this method takes value from the input elements and sets the value to the state variable
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Function to save a new Todo into the database
  submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => alert("Error posting data: ", error));
  };

  //Gives a Html form with a Http post
  render() {
    const { title, description, date, time } = this.state;
    return (
      <form className="inputfield" onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="title"
          name="title"
          id="title"
          value={title}
          onChange={this.changeHandler}
        ></input>
        <input
          type="text"
          placeholder="Description"
          name="description"
          id="description"
          value={description}
          onChange={this.changeHandler}
        ></input>
        <input
          type="date"
          placeholder="Due Date"
          id="due_date"
          name="dueDate"
          value={date}
          onChange={this.changeHandler}
        ></input>
        <input
          type="time"
          placeholder="time"
          id="time"
          name="dueTime"
          value={time}
          onChange={this.changeHandler}
        ></input>
        <input
          type="submit"
          name=""
          id="submit"
          value="Add to the list"
        ></input>
      </form>
    );
  }
}

export default NewTodoForm;
