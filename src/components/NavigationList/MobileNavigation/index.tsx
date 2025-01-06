import { mobileNavigationItems } from '@data/navigation.ts';
import SubcategoriesLinks from '@components/NavigationList/Subcategories';

const MobileNavigation = () => {
  return (
    <div className="flex-col py-4 sm:flex lg:hidden">
      {mobileNavigationItems.map((item) => (
        <div key={item.id}>
          <a
            href={item.url}
            className="flex py-4 text-lg font-bold uppercase text-gray-800"
          >
            {item.name}
          </a>

          <SubcategoriesLinks subCategories={item.subCategories} />
        </div>
      ))}
    </div>
  );
};

export default MobileNavigation;
