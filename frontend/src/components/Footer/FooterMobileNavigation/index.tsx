import {
  FooterBuyersNav,
  FooterCatalogueNav,
  FooterCompanyNav,
} from '@data/footer.ts';
import FooterNavSection from '@components/Footer/FooterNavSection';

// Main FooterMobileNavigation Component
const FooterMobileNavigation = () => {
  return (
    <div className="flex w-full justify-between lg:hidden">
      <FooterNavSection
        title="Catalogue of goods"
        navItems={FooterCatalogueNav}
      />

      <div className="flex flex-col">
        <FooterNavSection title="Company" navItems={FooterCompanyNav} />
        <div className="mt-4">
          <FooterNavSection title="To buyers" navItems={FooterBuyersNav} />
        </div>
      </div>
    </div>
  );
};

export default FooterMobileNavigation;
