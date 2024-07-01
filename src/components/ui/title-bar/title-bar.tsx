import { closeWindow, maximizeWindow, minimizeWindow } from '@/utils/window';
import { CheckBoxOutlineBlank, Close, Maximize, Minimize } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

/**
 * 标题栏
 * @returns
 */
export function TitleBar() {
  const { t } = useTranslation();

  function handleMaximizeWindow() {
    maximizeWindow();
  }

  function handleMinimizeWindow() {
    minimizeWindow();
  }
  function handleCloseWindow() {
    closeWindow();
  }

  return (
    <AppBar
      position='sticky'
      className='title-bar'>
      <Toolbar variant='dense'>
        <Box
          width='100%'
          display='flex'
          alignItems='center'
          justifyContent='space-between'>
          <Typography component='h1'>{t('title')}</Typography>
          <Box className='title-bar-action'>
            <Button
              color='inherit'
              onClick={handleMinimizeWindow}>
              <Minimize />
            </Button>
            <Button
              color='inherit'
              onClick={handleMaximizeWindow}>
              <CheckBoxOutlineBlank />
            </Button>
            <Button
              color='inherit'
              onClick={handleCloseWindow}>
              <Close />
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
