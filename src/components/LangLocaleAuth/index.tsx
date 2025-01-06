import Locale from '@components/LangLocaleAuth/Locale';
import Lang from '@components/LangLocaleAuth/Lang';
import { UserRound, UserRoundCheck } from 'lucide-react';
import { useState } from 'react';

const LangLocaleAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  return (
    <>
      <Lang />
      <Locale />
      {isLoggedIn ? (
        <UserRoundCheck width="17" height="17" />
      ) : (
        <UserRound width="17" height="17" />
      )}
    </>
  );
};

export default LangLocaleAuth;
