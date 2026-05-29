import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // FIX: Updated schema path to use a robust glob pattern.
  schema: "app/graphql/**/*.graphql",

  // 2. Define where your GraphQL documents (queries, mutations, etc.) are.
  documents: "app/**/*.graphql",

  // 3. The essential 'generates' field
  generates: {
    // 1. Change the output to a DIRECTORY, not a single file.
    // The preset will create graphql.ts, fragments.ts, etc., inside this folder.
    "./app/generated/": {
      // 2. Use the modern client preset instead of individual plugins
      preset: "client",

      config: {
        // Specify the client for integration with Apollo 4.0.8
        client: "apollo",
        // This configuration uses TypedDocumentNodes (TDO) instead of generated hooks,
        // which solves the QueryHookOptions compatibility error.
      },
    },
  },
};

export default config;
