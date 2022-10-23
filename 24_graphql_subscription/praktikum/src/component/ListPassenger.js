import { useState } from "react";
import ListItem from "./ListItem";
const ListPassenger = (props) => {
  const [ID, setID] = useState("");

  const handleInput = (e) => {
    setID(e.target.value);
  };

  const submitInput = () => {
    if (ID === "") {
      return alert("please input this coloumn");
    } else {
      props.fetchDataById({
        variables: {
          id: parseInt(ID),
        },
      });
    }
  };
  return (
    <div>
      <table border={1} cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td colSpan={2}>Action</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {props.data ? (
          <ListItem data={props.data.users[0]} />
        ) : (
          props.datas?.users?.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              hapusPengunjung={props.hapusPengunjung}
              editPengungjung={props.editPengungjung}
            />
          ))
        )}
      </table>
      <input
        style={{ margin: "50px 0 50px 0" }}
        placeholder="Input ID"
        onChange={handleInput}
      />
      <button onClick={submitInput}>Search</button>
    </div>
  );
};

export default ListPassenger;
