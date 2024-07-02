import { theme } from "@/components/theme";
import { TitleBar } from "@/components/ui/title-bar";
import { apolloClient } from "@/graphql/client";
import { ApolloProvider } from "@apollo/client";
import { routes } from "@generouted/react-router";
import { ThemeProvider } from "@mui/material";
import { RouterProvider, createHashRouter } from "react-router-dom";
import {} from "@/graphql/generated/apollo"

const router = createHashRouter(routes);

export function Layout() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <div className='root-layout'>
          <TitleBar />
          <div className='content'>
            <RouterProvider router={router} />
          </div>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}
