import "../css/form.css";
import { useState } from "react";

function FormTodo(props) {
  const [data, setData] = useState({
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
      const newData = {
        title: data.title,
        completed: data.completed,
      };
      props.tambahTodo(newData);
      setData({
        title: "",
        completed: false,
      });
    } else {
      alert("cek");
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
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </div>
  );
}

export default FormTodo;
