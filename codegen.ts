// In codegen.ts
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "app/graphql/**/*.graphql",
  documents: "app/**/*.graphql",

  // CHQ: Gemini AI corrected generates section of config
  generates: {
    // 1. Change the output to a DIRECTORY, not a single file.
    // The preset will create graphql.ts, fragments.ts, etc., inside this folder.
    "./app/generated/": {
      // 2. Use the modern client preset
      preset: "client",

      // 3. (Optional but recommended) Specify the client for optimization
      config: {
        client: "apollo",
        // We no longer need apolloHooksImport or withHooks here!
      },
    },
  },
};

export default config;
