import logoXS from '@assets/images/logo_xs.svg';

const MobileLogo = () => {
  return (
    <a href="/" title="Home">
      <img className="flex h-11 w-10 xl:hidden" src={logoXS} alt="Logo" />
    </a>
  );
};

export default MobileLogo;
