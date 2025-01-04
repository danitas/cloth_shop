const FooterCoop = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="footer_in inline-flex text-xs text-gray-700 lg:text-sm">
      <div className="lg:max-w-[300px]">
        <span>© 2012-{currentYear} Kachorovska </span>
        <span className="hidden flex-col lg:inline-flex">Atelier -</span>
        <span className="hidden flex-col lg:inline-flex">
          footwear, clothing &amp; accessories brand
        </span>
      </div>
    </div>
  );
};

export default FooterCoop;
