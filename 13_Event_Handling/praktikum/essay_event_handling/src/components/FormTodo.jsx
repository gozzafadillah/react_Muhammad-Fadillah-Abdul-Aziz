import { Component } from "react";
import "../css/form.css";

class FormTodo extends Component {
  state = {
    title: "",
    completed: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = this.state.title;
    if (isNotEmpty) {
      const newData = {
        title: this.state.title,
      };
      this.props.tambahTodo(newData);
      this.setState({
        title: "",
        completed: false,
      });
    } else {
      alert("cek");
    }
  };

  render() {
    return (
      <div>
        <div className="form" onSubmit={() => {}}>
          <input
            type="text"
            style={{ margin: "20px 10px" }}
            placeholder="Input Todo..."
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default FormTodo;
