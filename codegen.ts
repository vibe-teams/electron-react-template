import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const requestConfigs: CodegenConfig["config"] = {
  namingConvention: {
    transformUnderscore: true,
  },
  useTypeImports: true,
  skipTypename: true,
  federation: true,
};

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.APOLLO_CLIENT_URI,
  generates: {
    "./src/graphql/generated/apollo/index.ts": {
      schema: ["src/graphql/**/*.graphql"],
      documents: ["src/graphql/**/*.graphql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: requestConfigs,
    },
  },
};

export default config;
