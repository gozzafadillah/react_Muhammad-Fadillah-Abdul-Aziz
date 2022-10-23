import { useState } from "react";
import "./Home.css";
const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  const [editState, setEditState] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    nama: nama,
    umur: umur,
    jenisKelamin: jenisKelamin,
  });
  console.log({ props });

  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const changeEditState = () => {
    return setEditState(!editState);
  };

  return (
    <>
      {editState ? (
        <tbody>
          <tr key={id}>
            <td>
              <input
                value={updatedData.nama}
                onChange={handleChange}
                name="nama"
                type="text"
              />
            </td>
            <td>
              <input
                value={updatedData.umur}
                onChange={handleChange}
                name="umur"
                type="number"
              />
            </td>
            <td>
              <select onChange={handleChange} name="jenisKelamin">
                <option value="pria">Pria</option>
                <option value="wanita">Wanita</option>
              </select>
            </td>
            <td
              className="removeBorder"
              onClick={() => props.editPengungjung(id, updatedData)}
            >
              <button>Submit</button>
            </td>
            <td className="removeBorder" onClick={changeEditState}>
              <button>Selesai edit</button>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          <tr key={id}>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenisKelamin}</td>
            <td
              className="removeBorder"
              onClick={() => props.hapusPengunjung(id)}
            >
              <button>Hapus</button>
            </td>
            <td className="removeBorder" onClick={changeEditState}>
              <button>Edit</button>
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
};

export default ListItem;
