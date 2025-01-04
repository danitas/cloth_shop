import {
  FooterBuyersNav,
  FooterCatalogueNav,
  FooterCompanyNav,
} from '@data/footer.ts';
import FooterNavSection from '../FooterNavSection';

// Main FooterMobileNavigation Component
const FooterMobileNavigation = () => {
  return (
    <div className="hidden w-full justify-between lg:visible lg:flex lg:w-3/5">
      <FooterNavSection
        title="Catalogue of goods"
        navItems={FooterCatalogueNav}
        multiColumns
      />

      <FooterNavSection title="Company" navItems={FooterCompanyNav} />

      <FooterNavSection title="To buyers" navItems={FooterBuyersNav} />
    </div>
  );
};

export default FooterMobileNavigation;
