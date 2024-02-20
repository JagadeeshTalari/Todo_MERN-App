import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import axios from "axios";

import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data))
      .catch((err) => err.message);
  }, []);

  const taskHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/add", {
        task: value,
      })
      .then((result) => console.log(result));
    // setTodos([...todos, value]);
    location.reload();
    setValue("");
  };

  const editHandler = (id) => {
    axios
      .put(`http://localhost:3000/update/${id}`)
      .then((results) => console.log(results))
      .catch((err) => console.log(err.message));
    location.reload();
  };

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((results) => console.log(results))
      .catch((err) => console.log(err.message));
    location.reload();
    // const updatedTodos = todos.filter((item) => item._id !== id);
    // setTodos(updatedTodos);
  };

  return (
    <div>
      <form action="" onSubmit={taskHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="listItems">
        {todos.map((todo) => {
          const id = nanoid();
          return (
            <Todo
              key={id}
              todo={todo}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
