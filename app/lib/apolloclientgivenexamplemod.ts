// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.eng.meridiancapital.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Components will go here */}
    </ApolloProvider>
  );
}
