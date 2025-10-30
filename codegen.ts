// // Note: If you write queries inside of TypeScript/JavaScript files using gql tags, update the documents field to use a glob that matches those files, such as "src/**/*.{ts,tsx}".

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: "http://localhost:4000/graphql",
  // schema: "./app/pages/schema/queries/locations.graphql",
  // 1. Define where your GraphQL schema is located.
  schema: "./app/schema.graphql",

  // documents: "app/**/*.graphql",
  documents: "app/pages/**/*.graphql",
  // 2. Define where your GraphQL documents (queries, mutations, etc.) are.
  documents: "app/**/*.graphql",

  // 3. The essential 'generates' field
  generates: {
    // Define the output file path and the plugins to use for it
    "./src/gql/types.ts": {
      // These are the plugins that will generate the code
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      // Optional: configuration options for the plugins
      config: {
        // e.g., 'withHooks' or 'skipTypename'
      },
    },
  },
};

export default config;
