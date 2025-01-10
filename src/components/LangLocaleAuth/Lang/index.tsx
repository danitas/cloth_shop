import { useTranslation } from 'react-i18next';
import useScreenSize from '@hooks/useScreenSize.ts';
import clsx from 'clsx';

const Lang = () => {
  const { t, i18n } = useTranslation(); // Get the 't' function and 'i18n' instance for language handling
  const { isMdUp } = useScreenSize();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language when user selects one
  };

  return (
    <p
      className={clsx(
        !isMdUp ? 'text-white' : '',
        'lg:text-xs xl:text-base',
        'uppercase'
      )}
    >
      {i18n.language}
    </p>
  );
};

export default Lang;
