import Typography from '@shared/Typography';

const FooterCoop = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="footer_in flex text-xs text-gray-700 lg:text-sm">
      <Typography>
        © 2012-{currentYear} Kachorovska
        <Typography tag="span" className="hidden lg:flex">
          Atelier - <br />
          footwear, clothing &amp; accessories brand
        </Typography>
      </Typography>
    </div>
  );
};

export default FooterCoop;
