import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://exact-doe-63.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "Go1jTo7jja0Md4e0e7uRFdyg43U90bGnkYDq4i6W6DMlSPJezmvQGk0BChKvOCxn",
  },
});

export default client;
