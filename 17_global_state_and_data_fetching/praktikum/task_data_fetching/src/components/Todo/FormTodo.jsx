import "../../css/form.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Store/Feature/TodoSlice";

function FormTodo() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: uuidv4(),
    title: "",
    completed: false,
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = data.title;
    if (isNotEmpty) {
      dispatch(
        addTodo({ id: uuidv4(), title: data.title, completed: data.completed })
      );
      setData({
        id: "",
        title: "",
        completed: false,
      });
    } else {
      alert("form todo anda kosong!");
    }
  };

  return (
    <div>
      <div className="form" onSubmit={() => {}}>
        <input
          type="text"
          style={{ margin: "20px 10px" }}
          placeholder="Input Todo..."
          value={data.title}
          name="title"
          onChange={onChange}
          required
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </div>
  );
}

export default FormTodo;
