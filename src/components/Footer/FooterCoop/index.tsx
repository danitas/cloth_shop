import Typography from '@shared/Typography';

const FooterCoop = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="footer_in inline-flex text-xs text-gray-700 lg:text-sm">
      <div className="lg:max-w-[300px]">
        <Typography tag="span">© 2012-{currentYear} Kachorovska </Typography>
        <Typography tag="span" className="hidden flex-col lg:inline-flex">Atelier -</Typography>
        <Typography tag="span" className="hidden flex-col lg:inline-flex">
          footwear, clothing &amp; accessories brand
        </Typography>
      </div>
    </div>
  );
};

export default FooterCoop;
