import { PageWrapper } from '@/components/layouts/page-wrapper';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function Page() {
  const { t, i18n } = useTranslation();

  function handleSwitchLang() {
    if (i18n.language === 'en') {
      i18n.changeLanguage('tc');
      return;
    }
    i18n.changeLanguage('en');
  }

  return (
    <PageWrapper>
      <Button
        variant='contained'
        onClick={handleSwitchLang}>
        {t('switch-lang')}
      </Button>
    </PageWrapper>
  );
}
