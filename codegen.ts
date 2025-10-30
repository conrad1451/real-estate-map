// // Note: If you write queries inside of TypeScript/JavaScript files using gql tags, update the documents field to use a glob that matches those files, such as "src/**/*.{ts,tsx}".

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: "http://localhost:4000/graphql",
  // schema: "./app/pages/schema/queries/locations.graphql",
  // 1. Define where your GraphQL schema is located.
  schema: "./app/schema.graphql",

  // 2. Define where your GraphQL documents (queries, mutations, etc.) are.
  documents: "app/**/*.graphql",

  // 3. The essential 'generates' field
  generates: {
    // UPDATED OUTPUT PATH to match the import in LocationList.tsx
    // The component uses 'import ... from "../generated/graphql"', so we put the output
    // in the 'app/generated' directory relative to the project root.
    "./app/generated/graphql.tsx": {
      // These are the plugins that will generate the code
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      // Optional: configuration options for the plugins
      config: {
        // e.g., 'withHooks: true' if you want Apollo React hooks
        withHooks: true,
      },
    },
  },
};

export default config;
