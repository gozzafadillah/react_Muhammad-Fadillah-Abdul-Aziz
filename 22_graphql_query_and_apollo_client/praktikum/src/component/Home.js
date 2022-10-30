import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

const GetPassengerList = gql`
  query MyQuery {
    users {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const GetQueryFromId = gql`
  query MyQuery($id: Int) {
    users(where: { id: { _eq: $id } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const Home = () => {
  const { data, error } = useQuery(GetPassengerList);
  const [fetchDataById, { data: dataUser, error: errGetUser }] =
    useLazyQuery(GetQueryFromId);

  if (error) {
    console.log(error);
    return null;
  } else if (errGetUser) {
    console.log(errGetUser);
    return null;
  }
  return (
    <div>
      <Header />
      <ListPassenger
        datas={data}
        hapusPengunjung={hapusPengunjung}
        fetchDataById={fetchDataById}
        data={dataUser}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
};

const hapusPengunjung = (id) => {
  //   setState({
  //     data: [
  //       ...this.state.data.filter((item) => {
  //         return item.id !== id;
  //       }),
  //     ],
  //   });
};

const tambahPengunjung = (newUser) => {
  //   const newData = {
  //     id: uuidv4(),
  //     ...newUser,
  //   };
  //   setState({
  //     data: [data, newData],
  //   });
};

export default Home;
