import { useDispatch } from "react-redux";
import "../../css/todo.css";
import { removeTodo, updateStatTodo } from "../../Store/Feature/TodoSlice";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  let changeStatVar = {
    id: item.id,
    completed: !item.completed,
  };
  return (
    <div>
      <div className={item.completed ? "completed" : "notCompleted"}>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
          className={item.completed ? "disable" : "enable"}
        >
          <input
            type="checkbox"
            onChange={() => dispatch(updateStatTodo(changeStatVar))}
            {...(item.completed === true
              ? { checked: "checked" }
              : { checked: "" })}
          />
          <span style={{ textAlign: "center" }}> {item.title}</span>
          <button
            style={{ height: "30px" }}
            onClick={() => dispatch(removeTodo(item.id))}
          >
            delete
          </button>
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
