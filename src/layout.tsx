import { routes } from '@generouted/react-router';
import { TitleBar } from '@/components/ui/title-bar';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/components/theme';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter(routes);

export function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <div className='root-layout'>
        <TitleBar />
        <div className='content'>
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  );
}
