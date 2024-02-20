import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const taskHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  };

  const deleteHandler = (value) => {
    const updatedTodos = todos.filter((item) => item !== value);
    setTodos(updatedTodos);
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
          return <Todo key={id} todo={todo} deleteHandler={deleteHandler} />;
        })}
      </div>
    </div>
  );
}

export default App;
