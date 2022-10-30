import { split, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://exact-doe-63.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "Go1jTo7jja0Md4e0e7uRFdyg43U90bGnkYDq4i6W6DMlSPJezmvQGk0BChKvOCxn",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://exact-doe-63.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "Go1jTo7jja0Md4e0e7uRFdyg43U90bGnkYDq4i6W6DMlSPJezmvQGk0BChKvOCxn",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
