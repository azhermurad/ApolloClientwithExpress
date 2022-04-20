import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          songs: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          deleteSong: {
            merge(existing, incoming) {
              return incoming;
            },
          },

          song: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: "SongType",
                id: args.id,
              });
            },
          },
        },
      },
    },
    dataIdFromObject: (o) => {
      if (o) return o.id;
      else return null;
    },
  }),
});
export default client;
