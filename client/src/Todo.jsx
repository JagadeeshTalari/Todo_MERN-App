import React, { useState } from "react";
import {
  BsCheckCircleFill,
  BsCircle,
  BsCircleFill,
  BsFillCircleFill,
  BsTrashFill,
} from "react-icons/bs";

const Todo = ({ todo, deleteHandler }) => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="listItem">
      {/* index for now */}
      <div
        onClick={() => setCompleted(!completed)}
        className={completed ? `strike-through` : null}
      >
        {completed ? (
          <BsCheckCircleFill style={{ marginRight: "15px" }} />
        ) : (
          <BsCircleFill style={{ marginRight: "15px" }} />
        )}
        {todo}
      </div>
      <div onClick={() => deleteHandler(todo)}>
        <BsTrashFill />
      </div>
    </div>
  );
};

export default Todo;
