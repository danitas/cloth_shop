import clsx from 'clsx';
import { TSharedCategory } from '@components/NavigationList/DesktopNavigation/NavigationCategory';
import { navigationLinks } from '@data/navigation.ts';
import classes from './styles.module.scss';
import NavigationLinks from '@components/NavigationList/NavigationLinks';
import SubcategoriesLinks from '@components/NavigationList/SubcategoriesLinks';
import NewArrivalsNavDD from '../NewArrivalsNavDD';
import img from '@assets/images/navigation/menu_cabare.jpg';
import imgLast from '@assets/images/navigation/menu_last.jpg';

const Subcategories = ({
  subCategories,
  isLastItem,
  isVisible,
}: {
  subCategories?: TSharedCategory[];
  isLastItem?: boolean;
  isVisible: boolean;
}) => {
  if (!subCategories?.length) return null;

  return (
    <div
      className={clsx(
        classes.subcategoryWrapper,
        isVisible ? 'visible opacity-100' : 'invisible opacity-0',
        'transition-opacity duration-300 ease-in-out'
      )}
    >
      <div className="border-t">
        <div className="mx-20 flex justify-between py-6 lg:h-[305px]">
          <div className="flex h-full">
            <SubcategoriesLinks subCategories={subCategories} />
            <NavigationLinks subCategories={navigationLinks} />
          </div>
          <NewArrivalsNavDD imgSource={isLastItem ? imgLast : img} />
        </div>
      </div>
    </div>
  );
};

export default Subcategories;
