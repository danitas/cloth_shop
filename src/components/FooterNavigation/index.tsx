import {
  FooterBuyersNav,
  FooterCatalogueNav,
  FooterCompanyNav,
} from '../../data/footer.ts';

const FooterNavigation = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <h2 className="uppercase">Catalogue of goods</h2>
        <div className="flex flex-col">
          {FooterCatalogueNav.map((item) => (
            <a
              href={item.url}
              key={item.id}
              className="flex py-1 font-light capitalize"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="flex uppercase">Company</h2>
          <div className="flex flex-col">
            {FooterCompanyNav.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className="flex py-1 font-light capitalize"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <h2 className="flex uppercase">To buyers</h2>
          <div className="flex flex-col">
            {FooterBuyersNav.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className="flex py-1 font-light capitalize"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
