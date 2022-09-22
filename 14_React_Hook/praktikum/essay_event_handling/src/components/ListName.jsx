import ListItem from "./ListItem";

const ListName = (props) => {
  const { data, hapusTodo, gantiStatus } = props;

  return (
    <div className="card">
      <div className="card-body">
        {data.map((value) => (
          <ListItem
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

export default ListName;
