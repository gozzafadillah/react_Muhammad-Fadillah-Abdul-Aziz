import React, { Component } from "react";
import "../css/todo.css";
import { v4 as uuidv4 } from "uuid";
import ListName from "./ListName";
import FormTodo from "./FormTodo";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }

  hapusTodo = (id) => {
    const newList = this.state.data.filter((item) => item.id !== id);

    this.setState({ data: newList });
  };

  tambahTodo = (newData) => {
    const newTodo = { id: uuidv4(), ...newData };
    this.setState({ data: [...this.state.data, newTodo] });
  };

  gantiStatus = (id) => {
    const checkedBox = this.state.data.findIndex((value) => value.id === id);
    let newData = [...this.state.data];
    if (checkedBox >= 0) {
      newData[checkedBox].completed = !newData[checkedBox].completed;
    }
    this.setState({ data: newData });
    console.log(this.state.data);
  };

  render() {
    return (
      <>
        <FormTodo tambahTodo={this.tambahTodo} />
        <div className="container">
          <ListName
            data={this.state.data}
            hapusTodo={this.hapusTodo}
            gantiStatus={this.gantiStatus}
          />
        </div>
      </>
    );
  }
}
