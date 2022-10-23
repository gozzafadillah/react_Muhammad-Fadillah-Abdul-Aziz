import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import Loading from "./Loading";

const GetPassengerList = gql`
  query GetUsers {
    users {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const GetQueryFromId = gql`
  query GetUsersById($id: Int!) {
    users(where: { id: { _eq: $id } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const DeletePessengerById = gql`
  mutation DeleteUsers($id: Int!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;
const InsertDataPessenger = gql`
  mutation InsertUsers($objects: [users_insert_input!] = {}) {
    insert_users(objects: $objects) {
      returning {
        id
      }
    }
  }
`;
const UpdatePessenger = gql`
  mutation EditUser($id: Int!, $_set: users_set_input = {}) {
    update_users(where: { id: { _eq: $id } }, _set: $_set) {
      returning {
        id
      }
    }
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(GetPassengerList);
  const [fetchDataById, { data: dataUser, error: errGetUser, fecthLoading }] =
    useLazyQuery(GetQueryFromId);

  const [DeleteUsers, { error: deletedErr, loading: deleteLoading }] =
    useMutation(DeletePessengerById, {
      refetchQueries: [GetPassengerList],
    });

  const [InsertUsers, { error: insertErr, loading: insertLoading }] =
    useMutation(InsertDataPessenger, {
      refetchQueries: [GetPassengerList],
    });

  const [EditUser, { error: updateErr, loading: updateLoading }] = useMutation(
    UpdatePessenger,
    {
      refetchQueries: [GetPassengerList],
    }
  );

  const tambahPengunjung = (newUser) => {
    InsertUsers({
      variables: {
        objects: newUser,
      },
    });
  };

  function hapusPengunjung(id) {
    DeleteUsers({
      variables: {
        id: id,
      },
    });
  }

  const editPengungjung = (id, newUser) => {
    console.log(newUser, id);
    EditUser({
      variables: {
        id: id,
        _set: newUser,
      },
    });
  };

  if (error) {
    console.log(error);
    return null;
  } else if (errGetUser) {
    console.log(errGetUser);
    return null;
  } else if (deletedErr) {
    console.log(deletedErr);
    return null;
  } else if (insertErr) {
    console.log(deletedErr);
    return null;
  } else if (updateErr) {
    console.log(deletedErr);
    return null;
  }
  return (
    <div>
      <Header />
      {fecthLoading ||
      deleteLoading ||
      insertLoading ||
      updateLoading ||
      loading ? (
        <Loading />
      ) : (
        <ListPassenger
          datas={data}
          hapusPengunjung={hapusPengunjung}
          fetchDataById={fetchDataById}
          data={dataUser}
          editPengungjung={editPengungjung}
        />
      )}
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
};

export default Home;
