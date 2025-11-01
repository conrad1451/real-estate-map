// This file serves as the /api/graphql endpoint using the Next.js App Router (v13+)

import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { server } from "../../../apollo-client-server";
import { server } from "../../lib/apollo-client-server-v1";

// Import your schema and resolvers structure (placeholders for now)
// import { typeDefs } from "../../graphql/typeDefs";
// import { resolvers } from "../../graphql/resolvers";

// --- Integration ---
// This creates the Next.js request handler using the standalone Apollo Server instance.
const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    // This function runs on every request and allows you to attach context
    // (like authentication headers, database connections, etc.) to the resolvers.
    return { req, res };
  },
});

// Next.js App Router standard exports for handling POST and GET requests
export { handler as GET, handler as POST };
