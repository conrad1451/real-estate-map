import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
// const client = new ApolloClient({
//   uri: "/api/graphql", // Or your external GraphQL API URL
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  // link: new HttpLink({ uri: "https://flyby-router-demo.herokuapp.com/" }),
  link: new HttpLink({
    uri: "https://graphql.eng.meridiancapital.com/graphql",
  }),

  cache: new InMemoryCache(),
});
export default client;
