import { useTranslation } from 'react-i18next';
import Typography from '@shared/Typography';
import useScreenSize from '@hooks/useScreenSize.ts';
import clsx from 'clsx';

const Lang = () => {
  const { t, i18n } = useTranslation(); // Get the 't' function and 'i18n' instance for language handling
  const { isMdDown } = useScreenSize();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language when user selects one
  };

  return (
    <Typography
      className={clsx(isMdDown ? 'text-white' : '', 'lg:text-xs xl:text-base')}
      uppercase
    >
      {i18n.language}
    </Typography>
  );
};

export default Lang;
