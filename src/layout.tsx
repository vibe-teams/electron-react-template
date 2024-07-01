import { Routes } from '@generouted/react-router';
import { TitleBar } from '@/components/ui/title-bar';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/components/theme';

export function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <div className='root-layout'>
        <TitleBar />
        <div className='content'>
          <Routes />
        </div>
      </div>
    </ThemeProvider>
  );
}
