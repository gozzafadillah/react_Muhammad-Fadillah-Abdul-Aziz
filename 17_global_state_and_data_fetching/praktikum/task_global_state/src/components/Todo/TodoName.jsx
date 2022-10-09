import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoName = (props) => {
  const data = useSelector((state) => state.todo);
  const { hapusTodo, gantiStatus } = props;
  console.log(data);

  return (
    <div className="card">
      <div className="card-body">
        {data.data.length !== 0 ? (
          data.data.map((value) => (
            <TodoItem
              key={value.id}
              item={value}
              hapusTodo={hapusTodo}
              gantiStatus={gantiStatus}
            />
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>Data Kosong</h3>
        )}
      </div>
    </div>
  );
};

export default TodoName;
