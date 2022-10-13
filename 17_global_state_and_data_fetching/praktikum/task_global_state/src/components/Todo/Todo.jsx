import { useDispatch } from "react-redux";

import "../../css/todo.css";
import { v4 as uuidv4 } from "uuid";
import TodoName from "../../components/Todo/TodoName";
import FormTodo from "../../components/Todo/FormTodo";
import HeaderPage from "../Header/HeaderPage";
import {
  todoAdded,
  todoChangeStat,
  todoDeleted,
} from "../../Store/Feature/TodoSlice";

function Todo() {
  const dispatch = useDispatch();

  const hapusTodo = (id) => {
    dispatch(todoDeleted(id));
  };

  const tambahTodo = (newData) => {
    const newTodo = { id: uuidv4(), ...newData };
    dispatch(todoAdded(newTodo));
  };

  const gantiStatus = (id) => {
    dispatch(todoChangeStat(id));
  };

  return (
    <>
      <HeaderPage />
      <FormTodo tambahTodo={tambahTodo} />
      <div className="container">
        <TodoName hapusTodo={hapusTodo} gantiStatus={gantiStatus} />
      </div>
    </>
  );
}

export default Todo;
