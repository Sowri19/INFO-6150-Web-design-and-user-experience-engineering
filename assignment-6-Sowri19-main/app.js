const addContent = (persons = []) => {
  const main = document.getElementById("content");
  persons.forEach((person) =>
    addPerson(
      person.title,
      person.description,
      person.due_date,
      person.due_time,
      person.status,
      main
    )
  );
};
//APPENDING THE ITEMS TO THE MAIN DIV
const addPerson = (title, description, suredate, duetime, staus, main) => {
  description;
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  // checkbox.classList.add("item");
  const sup = document.createElement("details");
  // sup.classList.add("flexing");
  const heading = document.createElement("summary");
  heading.classList.add("item");
  const more_info = document.createElement("p");
  more_info.classList.add("item");
  heading.innerText = title;
  more_info.innerText = `${"Description: " + description} ${
    "Due Date: " + suredate
  } ${"Due Time: " + duetime} ${"Status: " + staus}`;
  sup.appendChild(heading);
  sup.appendChild(more_info);
  main.appendChild(checkbox);
  main.appendChild(sup);
};
// XHR REQUEST
const fetchData = () => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function (response) {
    if (this.status === 200) {
      const data = this.responseText;
      const persons = JSON.parse(data);
      addContent(persons);
    }
  });
  xhr.open("GET", "todo.json");
  xhr.send();
};

fetchData(); //FETCHING THE DATA FROM THE JSON

//ADDING NEW TODO-ITEM
const addtodo = document.getElementById("add");
addtodo.addEventListener("click", function (event) {
  event.preventDefault();
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  // checkbox.classList.add("item");
  const main = document.getElementById("content");
  const sup = document.createElement("details");
  // sup.classList.add("flexing");
  const heading = document.createElement("summary");
  heading.classList.add("item");
  heading.innerText = document.getElementById("todo_title").value;
  const more_info = document.createElement("p");
  more_info.classList.add("item");
  let tododescription = document.getElementById("todo_Description").value;
  let tododuedate = document.getElementById("todo_Due-date").value;
  let tododuetime = document.getElementById("todo_Due-time").value;
  let todostatus = document.getElementById("todo_status").value;
  more_info.innerText = `${"Description: " + tododescription} ${
    "Due Date: " + tododuedate
  } ${"Due Time: " + tododuetime} ${"Status: " + todostatus}`;
  sup.appendChild(heading);
  sup.appendChild(more_info);
  main.appendChild(checkbox);
  main.appendChild(sup);
  document.getElementById("cleareverything").reset();
});
