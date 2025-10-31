// typeDefs.ts

// CHQ: Gemini AI generated

import { gql } from "apollo-server-micro";

// Define your GraphQL schema here
export const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
    description: String
    photo: String
  }

  type Query {
    # This query must match the one used by useGetLocationsQuery()
    locations: [Location]
  }
`;
