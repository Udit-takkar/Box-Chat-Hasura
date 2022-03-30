import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { getUserIdFromToken } from "../utils/decodeToken";

let token: string | null = null;
let user_id: string | null = null;

const authLink = setContext((_, { headers }) => {
  token = localStorage.getItem("token");
  user_id = getUserIdFromToken(token);

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
      "X-Hasura-User-Id": user_id ? user_id : " ",
    },
  };
});

const httpLink = new HttpLink({
  uri: "https://udit-realtime-chat.hasura.app/v1/graphql",
  credentials: "include",
});

const wsLink = new WebSocketLink({
  uri: `wss://udit-realtime-chat.hasura.app/v1/graphql`,
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: `Bearer ${
          token ? token : localStorage.getItem("token") ?? null
        }`,
      },
    },
  },
});

const link = split(
  // split based on operation type
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
  link: authLink.concat(link),
  connectToDevTools: true,
  cache: new InMemoryCache({
    typePolicies: {
      Room: {
        fields: {
          Messages: {
            ...offsetLimitPagination(),
            keyArgs: ["id"],
          },
        },
      },
    },
  }),
});

export default client;
