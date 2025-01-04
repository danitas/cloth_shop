const FooterCoop = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="footer_in flex text-xs text-gray-700 lg:text-sm">
      <p className="footer_coop">
        © 2012-{currentYear} Kachorovska
        <span className="hidden lg:flex">
          Atelier - <br />
          footwear, clothing &amp; accessories brand
        </span>
      </p>
    </div>
  );
};

export default FooterCoop;
