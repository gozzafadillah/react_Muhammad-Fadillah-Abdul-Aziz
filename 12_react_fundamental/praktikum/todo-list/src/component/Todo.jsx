import React from "react";
import "../css/todo.css";
import Data from "../data/todoData.js";

function GetData(props) {
  const { todos } = props;

  return (
    <>
      {todos.map((todo) => (
        <div className="card">
          <div className="card-body">
            <p className={!todo.completed ? "enable" : "disable"}>
              {todo.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

function Todo() {
  return (
    <div>
      <GetData todos={Data} />
    </div>
  );
}

export default Todo;
