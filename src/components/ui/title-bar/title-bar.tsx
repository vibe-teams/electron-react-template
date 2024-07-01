import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TitleBarAction } from './title-bar-actions';
/**
 * 标题栏
 * @returns
 */
export function TitleBar() {
  const { t } = useTranslation();

  return (
    <AppBar
      position='sticky'
      className='title-bar'>
      <Toolbar
        variant='dense'
        sx={{
          height: 40,
          minHeight: 'unset',
          paddingRight: '0 !important',
        }}>
        <Box
          width='100%'
          display='flex'
          alignItems='center'
          justifyContent='space-between'>
          <Typography
            className='text-ellipsis overflow-hidden  whitespace-nowrap'
            component='h1'>
            {t('title')}
          </Typography>
        </Box>
        <TitleBarAction />
      </Toolbar>
    </AppBar>
  );
}
