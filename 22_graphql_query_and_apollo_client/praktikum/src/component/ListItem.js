import "./Home.css";
const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;

  return (
    <tbody>
      <tr key={id}>
        <td>{nama}</td>
        <td>{umur}</td>
        <td>{jenisKelamin}</td>
        <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
          <button>Hapus</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ListItem;
