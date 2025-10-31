import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../graphql/typeDefs"; // Assuming you define your schema here
import { resolvers } from "../graphql/resolvers"; // Assuming you define your resolvers here

// This initializes the Apollo Server instance with your schema
export const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// NOTE: We don't call server.start() here.
// The Next.js App Router handler (route.ts) will handle the request lifecycle.
