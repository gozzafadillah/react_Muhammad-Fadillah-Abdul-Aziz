import "../css/todo.css";

const ListItem = ({ item, hapusTodo, gantiStatus }) => {
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
            onChange={() => {
              gantiStatus(item.id);
            }}
            {...(item.completed === true
              ? { checked: "checked" }
              : { checked: "" })}
          />
          <span style={{ textAlign: "center" }}> {item.title}</span>
          <button
            style={{ height: "30px" }}
            onClick={() => {
              hapusTodo(item.id);
            }}
          >
            delete
          </button>
        </p>
      </div>
    </div>
  );
};

export default ListItem;
