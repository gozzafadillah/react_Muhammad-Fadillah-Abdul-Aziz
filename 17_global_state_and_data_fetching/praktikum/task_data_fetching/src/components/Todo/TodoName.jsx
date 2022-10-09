import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../Store/Feature/TodoSlice";
import TodoItem from "./TodoItem";

const TodoName = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="card">
      <div className="card-body">
        {data.data?.map((value) => (
          <TodoItem key={value.id} item={value} />
        ))}
      </div>
    </div>
  );
};

export default TodoName;
