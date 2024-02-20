import React, { useState } from "react";
import {
  BsCheckCircleFill,
  BsCircle,
  BsCircleFill,
  BsFillCircleFill,
  BsTrashFill,
} from "react-icons/bs";

const Todo = ({ todo, deleteHandler, editHandler }) => {
  // const [completed, setCompleted] = useState(false);
  return (
    <div className="listItem">
      {/* index for now */}
      <div
        onClick={() => {
          editHandler(todo._id);
        }}
        className={todo.done ? `strike-through` : `active`}
      >
        {todo.done ? (
          <BsCheckCircleFill style={{ marginRight: "15px" }} />
        ) : (
          <BsCircleFill style={{ marginRight: "15px" }} />
        )}
        {todo.task}
      </div>
      <div onClick={() => deleteHandler(todo._id)}>
        <BsTrashFill />
      </div>
    </div>
  );
};

export default Todo;
