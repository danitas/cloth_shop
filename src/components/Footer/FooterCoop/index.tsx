import Typography from '@shared/Typography';

const FooterCoop = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="leading-4 lg:max-w-[300px]">
      <Typography tag="span" size="sm" className="font-baseLight">
        © 2012-{currentYear} Kachorovska&nbsp;
      </Typography>
      <Typography
        tag="span"
        size="sm"
        className="hidden flex-col font-baseLight lg:inline-flex"
      >
        Atelier -
      </Typography>
      <Typography
        tag="span"
        size="sm"
        className="hidden flex-col font-baseLight lg:inline-flex"
      >
        footwear, clothing &amp; accessories brand
      </Typography>
    </div>
  );
};

export default FooterCoop;
