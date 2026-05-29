import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // link: new HttpLink({ uri: "https://flyby-router-demo.herokuapp.com/" }),
  link: new HttpLink({
    uri: "https://graphql.eng.meridiancapital.com/graphql",
  }),

  cache: new InMemoryCache(),
});

export default client;
