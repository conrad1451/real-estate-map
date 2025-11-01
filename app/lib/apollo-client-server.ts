// CHQ: Updated for Apollo Server v4

// We use the modern '@apollo/server' package and its official Next.js integration.
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

// Assuming these paths are correct in your project structure
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";

// 1. Create the Apollo Server instance (Initialization is much cleaner now)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Context setup is often handled here or within the handler options below
});

// 2. Create the Next.js API handler
// This function handles starting the server, processing the request, and
// applying necessary middlewares for Next.js automatically.
const handler = startServerAndCreateNextHandler(server, {
  // Optional: Define context to be passed to all resolvers
  context: async (req, res) => ({
    // You can retrieve user data, database connection, etc., here.
    req,
    res,
    // Example of a data source you might pass to resolvers:
    // db: new MyDatabaseClient(),
  }),
});

// 3. Export the handler as the default API function
export default handler;

// Optional: Keep the Next.js body parser disabled (recommended for GraphQL uploads)
export const config = {
  api: {
    bodyParser: false,
  },
};
