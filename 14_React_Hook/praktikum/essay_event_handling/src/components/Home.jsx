import React, { useState } from "react";
import "../css/todo.css";
import { v4 as uuidv4 } from "uuid";
import ListName from "./ListName";
import FormTodo from "./FormTodo";

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

function Home() {
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
      <FormTodo tambahTodo={tambahTodo} />
      <div className="container">
        <ListName data={data} hapusTodo={hapusTodo} gantiStatus={gantiStatus} />
      </div>
    </>
  );
}

export default Home;
