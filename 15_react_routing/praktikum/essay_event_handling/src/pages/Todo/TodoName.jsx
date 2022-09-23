import TodoItem from "./TodoItem";

const TodoName = (props) => {
  const { data, hapusTodo, gantiStatus } = props;

  return (
    <div className="card">
      <div className="card-body">
        {data.map((value) => (
          <TodoItem
            key={value.id}
            item={value}
            hapusTodo={hapusTodo}
            gantiStatus={gantiStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoName;
