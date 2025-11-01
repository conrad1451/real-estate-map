import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // FIX: Updated schema path to use a robust glob pattern.
  // This ensures that all .graphql files in the app/graphql directory are included,
  // resolving the schema loading error in the Vercel build environment.
  schema: "app/graphql/**/*.graphql",

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
        // CHQ: Gemini AI changed hooks import to client/react/hooks
        apolloHooksImport: "@apollo/client/react/hooks",
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

export default config;
