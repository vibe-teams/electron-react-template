import fs from "node:fs";
import path from "node:path";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { printSchema } from "graphql";
import { buildClientSchema, getIntrospectionQuery } from "graphql/utilities";
import "dotenv/config";

async function generateSchema() {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_EXTENSIONS_ENDPOINTS_DEFAULT_URL,
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      ${getIntrospectionQuery()}
    `,
  });
  const schema = buildClientSchema(data);
  const schemaSDL = printSchema(schema);
  const output = path.resolve(__dirname, "../src/graphql/schema.graphql");
  fs.writeFileSync(output, schemaSDL);
  console.log("Schema has been generated and saved to schema.graphql");
}

generateSchema().catch((error) => {
  console.error("Error generating schema:", error);
});
