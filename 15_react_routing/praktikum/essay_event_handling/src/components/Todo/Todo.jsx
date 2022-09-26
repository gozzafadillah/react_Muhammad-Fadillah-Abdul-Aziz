import React, { useState } from "react";
import "../../css/todo.css";
import { v4 as uuidv4 } from "uuid";
import TodoName from "../../pages/Todo/TodoName";
import FormTodo from "../../pages/Todo/FormTodo";
import HeaderPage from "../Header/HeaderPage";

const DATA = [
  {
    id: uuidv4(),
    title: "Latihan React",
    completed: false,
  },
  {
    id: uuidv4(),
    title: "Latihan Golang",
    completed: false,
  },
];

function Todo() {
  const [data, setData] = useState(DATA);

  const hapusTodo = (id) => {
    setData((oldData) => oldData.filter((item) => item.id !== id));
  };

  const tambahTodo = (newData) => {
    const newTodo = { id: uuidv4(), ...newData };
    setData((oldData) => [...oldData, newTodo]);
  };

  const gantiStatus = (id) => {
    const index = data.findIndex((value) => value.id === id);
    const newTodoList = [...data];
    if (index >= 0) {
      newTodoList[index].completed = !newTodoList[index].completed;
    }
    setData(newTodoList);
  };

  return (
    <>
      <HeaderPage />
      <FormTodo tambahTodo={tambahTodo} />
      <div className="container">
        <TodoName data={data} hapusTodo={hapusTodo} gantiStatus={gantiStatus} />
      </div>
    </>
  );
}

export default Todo;
