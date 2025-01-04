import { useTranslation } from 'react-i18next';

const Lang = () => {
  const { t, i18n } = useTranslation(); // Get the 't' function and 'i18n' instance for language handling

  // Change language dynamically
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language when user selects one
  };

  return (
    <>
      <p className="text-base uppercase">{i18n.language}</p>
    </>
  );
};

export default Lang;
