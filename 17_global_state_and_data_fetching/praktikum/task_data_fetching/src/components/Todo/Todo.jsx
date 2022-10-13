import "../../css/todo.css";

import TodoName from "../../components/Todo/TodoName";
import FormTodo from "../../components/Todo/FormTodo";
import HeaderPage from "../Header/HeaderPage";

function Todo() {
  return (
    <>
      <HeaderPage />
      <FormTodo />
      <div className="container">
        <TodoName />
      </div>
    </>
  );
}

export default Todo;
