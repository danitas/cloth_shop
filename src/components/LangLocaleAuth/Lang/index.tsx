import { useTranslation } from 'react-i18next';
import Typography from '@shared/Typography';

const Lang = () => {
  const { t, i18n } = useTranslation(); // Get the 't' function and 'i18n' instance for language handling

  // Change language dynamically
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language when user selects one
  };

  return (
    <Typography size="sm" uppercase>
      {i18n.language}
    </Typography>
  );
};

export default Lang;
