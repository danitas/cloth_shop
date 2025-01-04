import logoXS from '@assets/images/logo_xs.svg';

const MobileLogo = () => {
  return (
    <a href="/public" title="Home">
      <img className="h-11 w-10 sm:flex lg:hidden" src={logoXS} alt="Logo" />
    </a>
  );
};

export default MobileLogo;
